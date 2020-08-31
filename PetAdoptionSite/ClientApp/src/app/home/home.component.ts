import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles:[`
    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
    }
    .example-card
    {
      margin:5px;
    }
    .header
    {
      background: #1A6900;
      width:100%;
      color:white;
      padding:20px;
      padding-bottom:1px;
    }
    .content
    {
      padding:0;
      border: 1px solid black;
      width:100em;
      margin:0;
    }
  `]
})
export class HomeComponent {
}
