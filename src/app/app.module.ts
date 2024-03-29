import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SingleCategoryComponent } from './components/categories/single-category/single-category.component';
import { RandomOffersListComponent } from './components/random-offers-list/random-offers-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingleOfferComponent } from './components/random-offers-list/single-offer/single-offer.component';
import { AddOfferComponent } from './components/add-offer/add-offer.component';
import { OfferAddedSuccessfullyComponent } from './components/offer-added-successfully/offer-added-successfully.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchOffersListComponent } from './components/search-result/search-offers-list/search-offers-list.component';
import { SearchOfferItemComponent } from './components/search-result/search-offers-list/search-offer-item/search-offer-item.component';
import { SearchFiltersComponent } from './components/search-result/search-offers-list/search-filters/search-filters.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddOffersToLocalstorageForTestService } from './services/add-offers-to-localstorage-for-test.service';
import { OfferComponent } from './components/offer/offer.component';
import { OfferViewComponent } from './components/offer/offer-view/offer-view.component';
import { HttpClientModule } from '@angular/common/http';

export function addSampleOffersToLocalStorage(
  addOffersToLocalstorageForTestService: AddOffersToLocalstorageForTestService
) {
  return () =>
    addOffersToLocalstorageForTestService.addSampleOffersToLocalStorage();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    MainComponent,
    SearchComponent,
    CategoriesComponent,
    SingleCategoryComponent,
    RandomOffersListComponent,
    FooterComponent,
    SingleOfferComponent,
    AddOfferComponent,
    OfferAddedSuccessfullyComponent,
    SearchResultComponent,
    SearchOffersListComponent,
    SearchOfferItemComponent,
    SearchFiltersComponent,
    OfferComponent,
    OfferViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [
    AddOffersToLocalstorageForTestService,
    {
      provide: APP_INITIALIZER,
      useFactory: addSampleOffersToLocalStorage,
      deps: [AddOffersToLocalstorageForTestService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
