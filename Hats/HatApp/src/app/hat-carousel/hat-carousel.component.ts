import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hat-carousel',
  templateUrl: './hat-carousel.component.html',
  styleUrls: ['./hat-carousel.component.scss']
})
export class HatCarouselComponent implements OnInit {
  top3: {url:string}[];
  constructor() { }

  ngOnInit() {
    this.top3=[
      {url:'string'},
      {url:'string'},
      {url:'string'},
    ]
  }
}
