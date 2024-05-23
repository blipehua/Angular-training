import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IDepartment } from '../../model/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _urlDepartments: string = '../../assets/data/departments.json';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<IDepartment[]> {  
    const http$ = this.http.get<IDepartment[]>(this._urlDepartments);

    http$
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError(() => err);
        })
      );

    return http$;
  }
}
