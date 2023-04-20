import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOfferComponent } from './components/add-offer/add-offer.component';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainComponent } from './components/main/main.component';
import { OfferAddedSuccessfullyComponent } from './components/offer-added-successfully/offer-added-successfully.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { OfferComponent } from './components/offer/offer.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'account', component: LoginPageComponent },
  { path: 'add-offer', component: AddOfferComponent },
  {
    path: 'offer-added-successfully',
    component: OfferAddedSuccessfullyComponent,
  },
  {
    path: 'search',
    component: SearchResultComponent,
  },
  { path: 'offer/:id', component: OfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
