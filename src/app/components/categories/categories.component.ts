import { Component } from '@angular/core';
import { categoriesList } from 'src/app/helpers/helper';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  category = categoriesList;
}
