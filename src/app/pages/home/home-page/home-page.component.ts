import { Component, OnInit } from '@angular/core';
import {ICard} from '../../../core/interfaces/components/card.interface';
import {HOME_TYPES_OF_PATTERNS} from '../../../core/config/pages/home-page.config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  typeOfPatterns: Array<ICard> = HOME_TYPES_OF_PATTERNS;

  constructor() { }

  ngOnInit(): void {
  }

}
