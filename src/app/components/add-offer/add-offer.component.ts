import { Component, Input } from '@angular/core';
import { categoriesList, districtList } from 'src/app/helpers/helper';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent {
  @Input() categoryList = categoriesList;
  selectedCategoryValue = null;

  emailLogin: string = localStorage.getItem('emailInput');

  districtList = districtList;
  selectedDistrictValue = null;
}
