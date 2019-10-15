import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Image } from '../interfaces/image';
import { Customer } from '../interfaces/customer';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers:HttpHeaders = new HttpHeaders();
  options:any;

  constructor(private http: HttpClient) {

   }


  getImages():Observable<Image[]>{
    return this.http
    .get<Image[]>('http://localhost:8000/api/images')
  }

  addCustomer(customer:Customer):Observable<Customer>{

    let headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    })

    return this.http
    .post<Customer>('http://localhost:8000/api/customer', customer,{headers})
    .pipe( map( (data:Customer) => data ))
  }
}
