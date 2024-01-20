import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Status } from 'src/app/shared/models/task.model';
import { BehaviorSubject, Observable, catchError, first, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private url = 'http://localhost:8080/status';
  private statusCache = new BehaviorSubject<Status[]>([]);
  statusList$ = this.statusCache.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getAll()
      .pipe(first())
      .subscribe((status) => {
        this.statusCache.next(status);
      });
  }

  private getAll(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(this.url)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([])
        })
      );
  }

  
}
