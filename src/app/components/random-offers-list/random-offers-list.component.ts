import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-offers-list',
  templateUrl: './random-offers-list.component.html',
  styleUrls: ['./random-offers-list.component.css'],
})
export class RandomOffersListComponent implements OnInit {
  randomOffersList = [];

  ngOnInit() {
    const randomOffers = JSON.parse(localStorage.getItem('offers'));
    const count = Math.min(8, randomOffers.length);
    this.randomOffersList = this.getRandomOffers(count, randomOffers);
  }

  getRandomOffers(count: number, offers: string[]): string[] {
    const randomIndexes = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * offers.length);
      while (randomIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * offers.length);
      }
      randomIndexes.push(randomIndex);
    }
    return randomIndexes.map((index) => offers[index]);
  }
}
