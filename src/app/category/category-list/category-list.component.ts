import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category/services/category.service';
import { Observable, filter, forkJoin, map, of } from 'rxjs';
import { Category } from 'src/app/shared/models/task.model';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categoryList$: Observable<Category[]> = of([]);
  constructor(private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.categoryList$ = this.categoryService.categoryList$;
  }
}
