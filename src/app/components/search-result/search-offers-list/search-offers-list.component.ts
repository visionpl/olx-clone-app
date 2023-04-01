import { Component, Input } from '@angular/core';
import { OfferItem } from 'src/app/interfaces/OfferItem';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-offers-list',
  templateUrl: './search-offers-list.component.html',
  styleUrls: ['./search-offers-list.component.css'],
})
export class SearchOffersListComponent {
  results: OfferItem[];

  constructor(private searchService: SearchService) {
    this.results = searchService.getResults();
  }
}
