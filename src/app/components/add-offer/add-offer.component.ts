import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  districtListSelected = null;
  selectInputCategorySelected = null;
  selectInputStateSelected = null;

  emailLogin: string = localStorage.getItem('emailInput');

  addOffer(form: NgForm) {
    localStorage.setItem('form-data', JSON.stringify(form.value));
    let formValue = JSON.parse(localStorage.getItem('form-data'));
    console.log(formValue);
  }
}
