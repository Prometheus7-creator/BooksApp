import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  title = 'booksapp';
  loggedIn: any = localStorage.getItem("loggedIn");
  logout = () =>{
    localStorage.setItem("loggedIn", "false");
    this.router.navigate([''])
  }
}
