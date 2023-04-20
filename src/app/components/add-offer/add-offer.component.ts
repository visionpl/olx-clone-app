import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  categoriesList,
  districtList,
  offerState,
  MIN_DESCRIPTION_LENGHT,
  MAX_DESCRIPTION_LENGHT,
  MIN_VALUE_PRICE,
} from 'src/app/helpers/helper';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css'],
})
export class AddOfferComponent {
  constructor(private router: Router) {}

  minDescriptionLength = MIN_DESCRIPTION_LENGHT;
  maxDescriptionLength = MAX_DESCRIPTION_LENGHT;

  emailLogin: string = localStorage.getItem('emailInput');
  categoryList = categoriesList;
  districtList = districtList;
  stateList = offerState;

  form = new FormGroup(
    {
      offerName: new FormControl('', [
        Validators.maxLength(70),
        Validators.required,
      ]),
      category: new FormControl('', Validators.required),
      description: new FormControl('', [
        Validators.minLength(MIN_DESCRIPTION_LENGHT),
        Validators.maxLength(MAX_DESCRIPTION_LENGHT),
        Validators.required,
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(MIN_VALUE_PRICE),
      ]),
      state: new FormControl('', Validators.required),
      district: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9 ]{9}'),
      ]),
      email: new FormControl({ value: this.emailLogin, disabled: true }),
    },
    { updateOn: 'blur' }
  );

  onAddOffer(form: any) {
    if (this.form.valid) {
      let offersArray;
      offersArray = JSON.parse(localStorage.getItem('offers'));

      if (offersArray == null) {
        offersArray = [];
      }

      offersArray.push(form);
      localStorage.setItem('offers', JSON.stringify(offersArray));

      this.router.navigate(['offer-added-successfully']);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
