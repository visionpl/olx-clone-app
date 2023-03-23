import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-offers-list',
  templateUrl: './random-offers-list.component.html',
  styleUrls: ['./random-offers-list.component.css'],
})
export class RandomOffersListComponent implements OnInit {
  randomOffersList = [];

  ngOnInit() {
    this.randomOffersList = this.getRandomOffers(4);
  }

  getRandomOffers(count: number): string[] {
    const randomOffers = JSON.parse(localStorage.getItem('offers'));
    const randomIndexes = [];

    while (randomIndexes.length < count) {
      const randomIndex = Math.floor(Math.random() * randomOffers.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes.map((index) => randomOffers[index]);
  }
}
