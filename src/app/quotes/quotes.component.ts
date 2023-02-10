import { Component, OnInit } from '@angular/core';
import { simpson } from '../interfaces/index';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
   simpsons: simpson[] = [];

   constructor(){}
   ngOnInit(): void {}
}
