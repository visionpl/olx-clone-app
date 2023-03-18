import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  MIN_VALUE = 0.01;
  MIN_DESCRIPTION_LENGHT = 80;
  MAX_DESCRIPTION_LENGHT = 9000;

  emailLogin: string = localStorage.getItem('emailInput');
  categoryList = categoriesList;
  districtList = districtList;
  stateList = offerState;

  form = new FormGroup({
    offerName: new FormControl('', [
      Validators.maxLength(70),
      Validators.required,
    ]),
    category: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.minLength(this.MIN_DESCRIPTION_LENGHT),
      Validators.maxLength(this.MAX_DESCRIPTION_LENGHT),
      Validators.required,
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(Number.MIN_VALUE),
    ]),
    state: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9 ]{9}'),
    ]),
    email: new FormControl({ value: this.emailLogin, disabled: true }),
  });

  onAddOffer(form: any) {
    localStorage.setItem('offers', JSON.stringify(form));
    let formValue = JSON.parse(localStorage.getItem('offers'));
    console.log(formValue);
  }
}
