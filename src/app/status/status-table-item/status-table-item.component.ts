import { Component, Input  } from '@angular/core';
import { Status } from 'src/app/shared/models/task.model';
@Component({
  selector: 'app-status-table-item',
  templateUrl: './status-table-item.component.html',
  styleUrls: ['./status-table-item.component.scss']
})
export class StatusTableItemComponent {
  @Input() status: Status | null = null;
}
