import { Component,Input } from '@angular/core';
import { Category } from 'src/app/shared/models/task.model';
@Component({
  selector: 'app-category-table-item',
  templateUrl: './category-table-item.component.html',
  styleUrls: ['./category-table-item.component.scss']
})
export class CategoryTableItemComponent {
  @Input() category: Category | null = null;
}
