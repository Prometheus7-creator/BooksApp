import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  name!:string;
  email!:string;
  password!:string;
  confPassword!:string;

  register = () =>{
    if(this.password !== this.confPassword) {
      alert('Password and confirm password are not same');
    }
    else{
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
      localStorage.setItem("confPassword", this.confPassword);
      localStorage.setItem("name", this.name);
      this.router.navigate(['login']);
    }
    this.email = "";
    this.password = "";
    this.confPassword = "";
    this.name = "";

  }
}
