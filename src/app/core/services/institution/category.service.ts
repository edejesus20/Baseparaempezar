import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CategoryGroupI, CategoryI } from 'src/app/models/institution/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  API_URI = environment.API_URI;

  // API path
  base_path_post = `${this.API_URI}/api/Category`;
  base_path_get = `${this.API_URI}/api/Category`;

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
createItem(category: CategoryI): Observable<CategoryI> {
  return this.http
    .post<CategoryI>(this.base_path_post, JSON.stringify(category), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getItem(id: number): Observable<{category:CategoryI}> {
  return this.http
    .get<{category:CategoryI}>(this.base_path_get + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get students data
getList(): Observable<{ categorys: CategoryI[] }> {
 return this.http
   .get<{ categorys: CategoryI[] }>(this.base_path_get)
   .pipe(
     retry(0),
     catchError(this.handleError)
   )
}

// Update item by id
updateItem(id:number, category:CategoryI): Observable<CategoryI> {
  return this.http
    .patch<CategoryI>(this.base_path_get + '/' + id, JSON.stringify(category), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Delete item by id
deleteItem(id:number) {
  return this.http
    .delete<CategoryI>(this.base_path_get + '/' + id, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}
}
