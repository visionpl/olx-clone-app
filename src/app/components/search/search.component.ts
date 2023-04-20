import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { districtList } from 'src/app/helpers/helper';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router, private searchService: SearchService) {}
  search: string;
  districts = districtList;

  @Input() searchQuery: any = '';

  searchForm: FormGroup;

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSubmitSearch();
    }
  }

  onSubmitSearch() {
    if (this.searchForm.valid) {
      this.searchService.search(this.searchForm.value);
      const currentUrl = this.router.url;
      if (currentUrl === '/search') {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate(['/search']);
          });
      } else {
        this.router.navigate(['/search']);
      }
    } else {
      this.searchForm.markAllAsTouched();
    }
  }

  clearSearch() {
    this.searchForm.get('search').reset();
  }

  clearDistrict() {
    this.searchForm.get('district').reset();
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(this.searchQuery[0], [Validators.required]),
      district: new FormControl(this.searchQuery[1]),
    });
  }
}
