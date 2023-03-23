import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router: Router, private route: ActivatedRoute){

    fetch(`${this.base_url}/books`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      this.books = result['results'];
})
  }
  base_url: string = "https://gutendex.com";
  results: any = [];
  term!: string;

  books: any = [];

  showResult = (i:any) =>{
    console.log(i);
    // localStorage.setItem("searched", JSON.stringify(i));
    // this.router.navigate(['result']);
    this.books = [i];
    this.results = [];
    this.term = '';
  }

  search = () =>{
    if (this.term !== ''){
    fetch(`${this.base_url}/books?search=${encodeURIComponent(this.term)}`)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      this.results = result['results'];
  })
}
else{
  this.results = [];
}
}

}
