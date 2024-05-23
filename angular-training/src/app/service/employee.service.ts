import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _urlEmployees: string = '../../assets/data/employees.json';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    /*return [
      {"id": 1, "name": "Kiara", "age": 25},
      {"id": 2, "name": "Rafael", "age": 26},
      {"id": 3, "name": "Humberto", "age": 30},
      {"id": 4, "name": "Luciana", "age": 38},
      {"id": 5, "name": "Rose", "age": 50}
    ];*/
    const http$ = this.http.get<IEmployee[]>(this._urlEmployees);

    http$
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          this.errorHandler(err);
          return throwError(() => err);
          
        })
      );
      // .subscribe({
      //   next: data => console.log('Observable emitted the next value: ' + data.forEach((element) => console.log(element))),
      //   error: err => console.error('Observable emitted an error: ' + err),
      //   complete: () => console.log('Observable emitted the complete notification')
      // }
      // );
    
    return http$;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error)
  }
}
