import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list/status-list.component';
import { StatusRoutingModule } from './status-routing.module';
import { StatusTableComponent } from './status-table/status-table.component';
import { StatusService } from './services/status.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusTableItemComponent } from './status-table-item/status-table-item.component';

@NgModule({
  declarations: [
    StatusListComponent,
    StatusTableComponent,
    StatusTableItemComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    StatusListComponent
  ],
  providers:[
    StatusService
  ]
})
export class StatusModule { }
