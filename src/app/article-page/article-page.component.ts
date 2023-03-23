import { Component } from '@angular/core';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  constructor(){
    this.articleObj = JSON.parse("" + localStorage.getItem("articleObj"));
  }
  articleObj!: any;
}
