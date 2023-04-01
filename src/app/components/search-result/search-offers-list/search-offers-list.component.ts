import { Component, Input } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-offers-list',
  templateUrl: './search-offers-list.component.html',
  styleUrls: ['./search-offers-list.component.css'],
})
export class SearchOffersListComponent {
  results: any[];

  constructor(private searchService: SearchService) {
    this.results = searchService.getResults();
  }
}
