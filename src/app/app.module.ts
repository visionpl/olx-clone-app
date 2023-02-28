import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SingleCategoryComponent } from './components/categories/single-category/single-category.component';
import { RandomOffersListComponent } from './components/random-offers-list/random-offers-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginPageComponent, MainComponent, SearchComponent, CategoriesComponent, SingleCategoryComponent, RandomOffersListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
