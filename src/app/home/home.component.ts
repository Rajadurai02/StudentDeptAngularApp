import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loggedUser: User;
  constructor(private _router: Router, private _token: TokenService) {
    this.loggedUser = new User();
  }
  ngOnInit(): void {
    if (!this._token.loginSuccess) {
      var storedUser = sessionStorage.getItem("login");
      if (storedUser != null) {
        this._token.loginSuccess = true;
        this._token.LoggedInUser = JSON.parse(storedUser);
        console.log('value retived');
      }
      else {
        this._router.navigate(['/Login']);
      }
    }
    else {
      this.loggedUser = this._token.LoggedInUser;
    }
  }
  logout() {
    this._token.LoggedInUser = new User();
    this._token.loginSuccess = false;
    this._router.navigate(['/Login']);
    sessionStorage.removeItem("login");
  }
}
