import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Image } from '../class/image';
import { Customer } from '../class/customer';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }


  getImages(){
    return this.http.get(`${this.url}/images`);
  }

  saveCustomer(customer:Customer){
    
      const headers = new HttpHeaders({
        'Content-Type':  'application/json'
      })


    return this.http.post(`${this.url}/customer`, customer, {headers});
  }
}
