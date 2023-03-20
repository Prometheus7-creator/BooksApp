import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  email!: string;
  password!: string;

  login = () =>{
    if (localStorage.getItem("email")===this.email && localStorage.getItem("password")===this.password){
      this.router.navigate(['search']);
      localStorage.setItem("loggedIn", "true");
    }
    else{
      alert('Email or password is incorrect');
    }
  }
}
