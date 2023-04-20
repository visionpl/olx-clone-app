import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent {
  constructor(private searchService: SearchService) {}
  searchValues = [
    this.searchService.searchValueForm,
    this.searchService.searchDistrictForm,
  ];
}
