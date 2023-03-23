import { Component, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  title = 'booksapp';
  loginClass: string = '';
  logoutClass: string = 'hide'
  loggedIn: any = localStorage.getItem("loggedIn");

  isLoggedIn = () =>{
    return this.loggedIn == 'true';
  }

  logout = () =>{
    this.loginClass = '';
    this.logoutClass = 'hide';
    this.router.navigate(['/home']);
  }

  login = () =>{
    this.loginClass = 'hide';
    this.logoutClass = '';
  }
}
