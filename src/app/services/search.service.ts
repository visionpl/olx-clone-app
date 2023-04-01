import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  results: any[];

  search(value: string) {
    const data = JSON.parse(localStorage.getItem('offers'));
    this.results = data.filter((item) => item.offerName.includes(value));
    console.log(this.results);
  }

  getResults() {
    return this.results;
  }
}
