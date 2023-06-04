import { Component } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { TokenService } from '../token.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user:User;
  serverErrorMsg:string="";
  constructor(private _router:Router,private _service:UserService,private  _token:TokenService,private _fb:FormBuilder) {
    this.user = new User();
  } 

  get Email(){
    return this.UserLoginForm.get('Email');
  }

  get Password(){
    return this.UserLoginForm.get('Password');
  }

  UserLoginForm = this._fb.group({
    Email: ['',[Validators.required,Validators.email]],
    Password: ['',[Validators.required]],
  })

  navigateToRegisterComp(){
    this._router.navigate(['/Register']);
  }

  login(){
    this._service.userLogin(this.user).subscribe((data)=>{
      var loggedUser:User = data as User;
      this._token.LoggedInUser = loggedUser;
      this._token.loginSuccess = true;
      sessionStorage.setItem("login",JSON.stringify(loggedUser));
      this._router.navigate(['/Home']);
    },
    (error: Response) => {  
      if(error.status === 400)  
        this.serverErrorMsg = "Invalid Username or Password"; 
      else {  
        this.serverErrorMsg = "An Unexpected Error Occured. Try after some time";
      }  
    });    
  }
}
