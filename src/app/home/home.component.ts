import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _router:Router,private _token:TokenService) {

  }
  ngOnInit(): void {
    if(!this._token.loginSuccess){
      this._router.navigate(['/Login']);
    }
  }
}
