import { Component, Input, OnInit } from '@angular/core';
import {data} from '../../data/fakeData'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Input() cover:string = ""
  @Input() title:string = ""
  @Input() description:string = ""
  @Input() publishedDate:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  articles = data;

  getBigCard() {
    return this.articles[0];
  }

  getSmallCards() {
    return this.articles.slice(1); // Exclui o primeiro elemento (Big Card)
  }

}
