import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router: Router, private route: ActivatedRoute){}
  results: any = [];
  term!: string;

  showResult = (i:any) =>{
    console.log(i);
    localStorage.setItem("searched", JSON.stringify(i));
    this.router.navigate(['result']);
  }

  search = () =>{
    if (this.term !== ''){
    let temp = (this.term.split(' ')).join('-');
    console.log(temp);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${temp}&key=AIzaSyC4tzHCutKZAaheeUH-zNdTr947J3xtMpE`)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    this.results = result['items'];
})}
else{
  this.results = [];
}
}

}
