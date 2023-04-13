import { Injectable } from '@angular/core';
import { OfferItem } from '../interfaces/OfferItem';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  results: OfferItem[];

  search(form: any) {
    const offersList = JSON.parse(localStorage.getItem('offers'));

    this.results = offersList.filter((offer: OfferItem) => {
      const searchValue = form.search.toLowerCase();
      const districtValue = form.district;

      if (districtValue) {
        return (
          offer.offerName.toLowerCase().includes(searchValue) &&
          offer.district === districtValue
        );
      } else {
        return offer.offerName.toLowerCase().includes(searchValue);
      }
    });
  }

  getResults() {
    return this.results;
  }
}
