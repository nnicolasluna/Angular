import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service';
import { Observable, filter, forkJoin, map, of } from 'rxjs';
import { Status } from 'src/app/shared/models/task.model';
@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent {
  statusList$: Observable<Status[]> = of([]);
  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.statusList$ = this.statusService.statusList$;
  }


}
