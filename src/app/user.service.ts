import { Injectable } from '@angular/core';
import { HttpClient, HttpSentEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLoginApiUrl = "http://localhost:57330/api/User/Login";
  private userRegisterApiUrl = "http://localhost:57330/api/User/Register";
  constructor(private _http:HttpClient) { }

  userLogin(user:User):Observable<User>{
    return this._http.post<User>(this.userLoginApiUrl,user);
  }
  userRegister(user:User):Observable<User>{
    return this._http.post<User>(this.userRegisterApiUrl,user);
  }
}
