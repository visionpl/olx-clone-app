import { Component } from '@angular/core';
import { randomOffersList } from 'src/app/helpers/helper';

@Component({
  selector: 'app-random-offers-list',
  templateUrl: './random-offers-list.component.html',
  styleUrls: ['./random-offers-list.component.css'],
})
export class RandomOffersListComponent {
  randomOffersList = randomOffersList;
}
