import { Injectable } from '@angular/core';
import { OfferItem } from '../interfaces/OfferItem';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  results: OfferItem[];
  searchValueForm: string;
  searchDistrictForm: number;

  search(form: any) {
    const offersList = JSON.parse(localStorage.getItem('offers'));

    this.results = offersList.filter((offer: OfferItem) => {
      const searchValue = form.search.toLowerCase();
      this.searchValueForm = searchValue;

      const districtValue = form.district;
      this.searchDistrictForm = districtValue;

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
