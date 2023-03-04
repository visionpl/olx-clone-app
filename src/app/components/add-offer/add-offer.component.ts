import { Component, Input } from '@angular/core';
import {
  categoriesList,
  districtList,
  offerState,
} from 'src/app/helpers/helper';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent {
  categoryList = categoriesList;
  districtList = districtList;
  stateList = offerState;

  emailLogin: string = localStorage.getItem('emailInput');
}
