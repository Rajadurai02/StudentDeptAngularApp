import { Injectable } from '@angular/core';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public LoggedInUser:User;
  constructor() { 
    this.LoggedInUser = new User();
  }
}
