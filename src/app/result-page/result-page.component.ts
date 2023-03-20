import { Component } from '@angular/core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent {
  item: any;
  img: any;
  authors: any;
  constructor(){
    this.item = localStorage.getItem("searched");
    this.item = JSON.parse(this.item);
    this.img = this.item['volumeInfo']['imageLinks']['thumbnail'];
    this.authors = this.item['volumeInfo']['authors'];
    console.log(this.item)
  }
}
