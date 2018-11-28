import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imageURL;
  imageURLs = [
    'https://media.giphy.com/media/RQSuZfuylVNAY/giphy.gif',
    'https://media.giphy.com/media/CadhjL8Itxaxi/giphy.gif',
    'https://media.giphy.com/media/l0Iy39YtBu5InK3C0/giphy.gif',
    'https://media.giphy.com/media/8pW0vLq2qqpgI/giphy.gif'
  ]
  
  constructor() { }

  ngOnInit() {
  }

  chooseImage(event) {
    this.imageURL = event;
  }

}
