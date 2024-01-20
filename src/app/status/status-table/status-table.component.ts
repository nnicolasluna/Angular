import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Status } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.scss']
})
export class StatusTableComponent {


  @Input() statusList: Status[] | null = [];

  constructor(){}
}
