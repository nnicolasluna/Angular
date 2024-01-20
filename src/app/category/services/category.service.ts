import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/shared/models/task.model';
import { BehaviorSubject, Observable, catchError, first, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'http://localhost:8080/categories';
  private categoryCache = new BehaviorSubject<Category[]>([]);
  categoryList$ = this.categoryCache.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getAll()
      .pipe(first())
      .subscribe((status) => {
        this.categoryCache.next(status);
      });
  }

  private getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([])
        })
      );
  }
}