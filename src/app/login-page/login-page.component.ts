import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router, private route: ActivatedRoute, private app: AppComponent){}
  data!: string;
  name!: string;
  email!: string;
  password!: string;

  showSignup = () =>{
    this.data = 'right-panel-active';
    console.log('signup')
  }

  showSignin = () =>{
    this.data = '';
    console.log('signin')

  }

  register = () =>{
    localStorage.setItem("email", this.email);
    localStorage.setItem("password", this.password);
    localStorage.setItem("name", this.name);
    localStorage.setItem("loggedIn", "true");
    this.email = "";
    this.password = "";
    this.name = "";
    this.app.login();

    this.router.navigate(['search']);

  }

  login = () =>{

    if ((this.email==='admin' && this.password ==='admin') || (localStorage.getItem("email")===this.email && localStorage.getItem("password")===this.password)){
      localStorage.setItem("loggedIn", "true");
      this.app.login();
      this.router.navigate(['search']);
    }
    else{
      alert('Email or password is incorrect');
    }
  }
}
