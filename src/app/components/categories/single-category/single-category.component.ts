import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent {
  @Input() categoryItem = { name: '', image: '' };
}
