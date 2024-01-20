import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/shared/models/task.model';
@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent {
  @Input() categoryList: Category[] | null = [];

  constructor(){}
}
