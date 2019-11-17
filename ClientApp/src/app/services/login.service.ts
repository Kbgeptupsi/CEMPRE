import { Injectable, Inject } from '@angular/core';
import { Practiceer } from '../models/practiceer';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Login } from '../models/login';

const httpOptions = { 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string) { }

  logIn(login: Login): Observable<Practiceer> {
    return this.http.post<Practiceer>(this.baseUrl+'api/Login', login, httpOptions);
  }

  logOut(ip:string): Observable<Login> {
    return this.http.delete<Login>(this.baseUrl+'api/Login/'+ip);    
  }

  practiceer(ip:string): Observable<Practiceer> {
    return this.http.get<Practiceer>(this.baseUrl+'api/Login/'+ip);
  }

  ip(): Observable<{ip:string}>{
    return this.http.get<{ip:string}>('https://jsonip.com');
  }

  getBase():string{
    return this.baseUrl;
  }

}