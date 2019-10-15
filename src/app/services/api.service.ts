import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Image } from '../interfaces/image';
import { Customer } from '../interfaces/customer';
import { Titulo } from '../interfaces/titulo';



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

  getTitulos():Observable<Titulo[]>{
    return this.http
    .get<Titulo[]>('http://localhost:8000/api/titulos')
  }


  addCustomer(full_name:any, email:any, phone:any){

    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    })

    let body = JSON.stringify({
      full_name: full_name,
      email: email,
      phone : phone
    });

    return this.http
    .post('http://localhost:8000/api/customer', body,{headers});
  }


}
