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
  description: any;
  constructor(){
    this.item = localStorage.getItem("searched");
    this.item = JSON.parse(this.item);
    this.img = this.item['volumeInfo']['imageLinks']['thumbnail'];
    this.authors = this.item['volumeInfo']['authors'];
    this.description = this.item['volumeInfo']['description']
    console.log(this.item)
  }
}
