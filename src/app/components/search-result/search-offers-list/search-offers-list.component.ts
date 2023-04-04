import { Component } from '@angular/core';
import { OfferItem } from 'src/app/interfaces/OfferItem';
import { SearchService } from 'src/app/services/search.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-search-offers-list',
  templateUrl: './search-offers-list.component.html',
  styleUrls: ['./search-offers-list.component.css'],
})
export class SearchOffersListComponent {
  results: OfferItem[];
  p: number = 1;

  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1,
  };
  public labels: any = {
    previousLabel: 'Poprzednia',
    nextLabel: 'Następna',
    screenReaderPageLabel: 'strona',
    screenReaderCurrentLabel: `Jesteś na stronie`,
  };

  constructor(private searchService: SearchService) {
    this.results = searchService.getResults();
  }
}
