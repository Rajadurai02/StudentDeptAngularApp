import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { TokenService } from '../token.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User;
  serverError:boolean=false;
  constructor(private _http:HttpClient,private _service:UserService,private _token:TokenService,private _fb:FormBuilder,private _router:Router) {
    this.user = new User();
  }

  UserRegistrationForm = this._fb.group({
    Email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required,Validators.minLength(4)]],
    Name:['',Validators.required]
  })

  get Email(){
    return this.UserRegistrationForm.get('Email');
  }
  get Password(){
    return this.UserRegistrationForm.get('Password');
  }
  get Name(){
    return this.UserRegistrationForm.get('Name');
  }
  registerUser(){
    this._service.userRegister(this.user).subscribe((data)=>{
      var loggedUser:User = data as User;
      this._token.LoggedInUser = loggedUser;
      this._token.loginSuccess = true;
      this._router.navigate(['/Home']);
    },
    (error: Response) => {   
        this.serverError = true; 
    });
  }
}
