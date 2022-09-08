import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ScaleI } from 'src/app/models/institution/scale';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {

  API_URI = environment.API_URI;

  // API path
  base_path_post = `${this.API_URI}/api/Scale`;
  base_path_get = `${this.API_URI}/api/Scale`;

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
createItem(seedbeds: ScaleI): Observable<ScaleI> {
  return this.http
    .post<ScaleI>(this.base_path_post, JSON.stringify(seedbeds), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getItem(id: number): Observable<{scale:ScaleI}> {
  return this.http
    .get<{scale:ScaleI}>(this.base_path_get + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get students data
getList(): Observable<{ scales: ScaleI[] }> {
 return this.http
   .get<{ scales: ScaleI[] }>(this.base_path_get)
   .pipe(
     retry(0),
     catchError(this.handleError)
   )
}

// Update item by id
updateItem(id:number, scale:ScaleI): Observable<ScaleI> {
  return this.http
    .patch<ScaleI>(this.base_path_get + '/' + id, JSON.stringify(scale), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Delete item by id
deleteItem(id:number) {
  return this.http
    .delete<ScaleI>(this.base_path_get + '/' + id, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}
}
