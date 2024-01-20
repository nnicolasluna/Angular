import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryTableItemComponent } from './category-table-item/category-table-item.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryTableComponent,
    CategoryTableItemComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CategoryListComponent
  ],
  providers:[
    CategoryService
  ]
})
export class CategoryModule { }
