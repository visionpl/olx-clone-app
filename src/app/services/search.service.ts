import { Injectable } from '@angular/core';
import { OfferItem } from '../interfaces/OfferItem';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  results: OfferItem[];

  search(value: string) {
    const offersList = JSON.parse(localStorage.getItem('offers'));
    this.results = offersList.filter((offer: OfferItem) =>
      offer.offerName.toLowerCase().includes(value.toLowerCase())
    );
  }

  getResults() {
    return this.results;
  }
}
