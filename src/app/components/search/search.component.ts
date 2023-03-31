import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { districtList } from 'src/app/helpers/helper';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private router: Router) {}

  districts = districtList;

  onSubmitSearch(value: string) {
    console.log(value);
    this.router.navigate([`search/${value}`]);
  }
}
