import { Component } from '@angular/core';
import { districtList } from 'src/app/helpers/helper';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  districts = districtList;
}
