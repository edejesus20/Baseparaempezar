import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CategoryGroupI } from 'src/app/models/institution/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryGroupService {


  API_URI = environment.API_URI;

  // API path
  base_path_post = `${this.API_URI}/api/CategoryGroup`;
  base_path_get = `${this.API_URI}/api/CategoryGroup`;

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
createItem(categoryGroup: CategoryGroupI): Observable<CategoryGroupI> {
  return this.http
    .post<CategoryGroupI>(this.base_path_post, JSON.stringify(categoryGroup), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getItem(id: number): Observable<{categoryGroup:CategoryGroupI}> {
  return this.http
    .get<{categoryGroup:CategoryGroupI}>(this.base_path_get + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get students data
getList(): Observable<{ categoryGroups: CategoryGroupI[] }> {
 return this.http
   .get<{ categoryGroups: CategoryGroupI[] }>(this.base_path_get)
   .pipe(
     retry(0),
     catchError(this.handleError)
   )
}

// Update item by id
updateItem(id:number, categoryGroup:CategoryGroupI): Observable<CategoryGroupI> {
  return this.http
    .patch<CategoryGroupI>(this.base_path_get + '/' + id, JSON.stringify(categoryGroup), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Delete item by id
deleteItem(id:number) {
  return this.http
    .delete<CategoryGroupI>(this.base_path_get + '/' + id, this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}
}
