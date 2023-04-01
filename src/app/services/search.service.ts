import { Injectable } from '@angular/core';
import { OfferItem } from '../interfaces/OfferItem';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  results: OfferItem[];

  search(value: string) {
    const data = JSON.parse(localStorage.getItem('offers'));
    this.results = data.filter((item) => item.offerName.includes(value));
    // console.log(this.results);
  }

  getResults() {
    return this.results;
  }
}
