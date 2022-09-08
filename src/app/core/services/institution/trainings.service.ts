import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TrainingI } from 'src/app/models/institution/training';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  API_URI = environment.API_URI;

  // API path
  base_path_post = `${this.API_URI}/api/Training`;
  base_path_get = `${this.API_URI}/api/Training`;

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
createItem(training: TrainingI): Observable<TrainingI> {
  return this.http
    .post<TrainingI>(this.base_path_post, JSON.stringify(training), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getItem(id: number): Observable<{training:TrainingI}> {
  return this.http
    .get<{training:TrainingI}>(this.base_path_get + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get students data
getList(): Observable<{ trainings: TrainingI[] }> {
 return this.http
   .get<{ trainings: TrainingI[] }>(this.base_path_get)
   .pipe(
     retry(0),
     catchError(this.handleError)
   )
}

// Update item by id
updateItem(id:number, training:TrainingI): Observable<TrainingI> {
  return this.http
    .patch<TrainingI>(this.base_path_get + '/' + id, JSON.stringify(training), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Delete item by id
deleteItem(id:number) {
  return this.http
    .delete<TrainingI>(this.base_path_get + '/' + id, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}
}
