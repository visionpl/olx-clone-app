import { Component, Input } from '@angular/core';
import { CategoryItem } from 'src/app/interfaces/CategoryItem';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent {
  @Input() categoryItem: CategoryItem;
}
