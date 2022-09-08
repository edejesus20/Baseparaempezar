import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CategoryGroupI } from 'src/app/models/institution/category';
import { UniversityI } from 'src/app/models/institution/university';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {


  API_URI = environment.API_URI;

  // API path
  base_path_post = `${this.API_URI}/api/university`;
  base_path_get = `${this.API_URI}/api/university`;

constructor(private http: HttpClient) { }

// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// Handle API errors
handleError(res: Response) {
  const statusCode = res.status;
  const body = res;
  const error = {
    statusCode: statusCode,
    error: body
  };
  return throwError(error.error);

};


// Create a new item
createItem(university: UniversityI): Observable<UniversityI> {
  return this.http
    .post<UniversityI>(this.base_path_post, JSON.stringify(university), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getItem(id: number): Observable< {university:UniversityI}> {
  return this.http
    .get<{university:UniversityI}>(this.base_path_get + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get students data
getList(): Observable<{ universitys: UniversityI[] }> {
 return this.http
   .get<{ universitys: UniversityI[] }>(this.base_path_get)
   .pipe(
     retry(0),
     catchError(this.handleError)
   )
}

// Update item by id
updateItem(id:number, university:UniversityI): Observable<UniversityI> {
  return this.http
    .patch<UniversityI>(this.base_path_get + '/' + id, JSON.stringify(university), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Delete item by id
deleteItem(id:number) {
  return this.http
    .delete<UniversityI>(this.base_path_get + '/' + id, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}
}
