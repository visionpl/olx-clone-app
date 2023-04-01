import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { districtList } from 'src/app/helpers/helper';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private router: Router, private searchService: SearchService) {}
  search: string;

  districts = districtList;

  onSubmitSearch(value: string) {
    this.searchService.search(this.search);
    const currentUrl = this.router.url;
    if (currentUrl === '/search') {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/search']);
      });
    } else {
      this.router.navigate(['/search']);
    }
  }
}
