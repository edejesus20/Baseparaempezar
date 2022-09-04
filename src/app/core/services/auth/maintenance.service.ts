import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { MaintenanceI } from 'src/app/models/authorization/maintenance';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  API_URI = environment.API_URI;

  // API path
 base_path_post = `${this.API_URI}/api/Maintenance`;
 base_path_get = `${this.API_URI}/api/Maintenance`;

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
 createItem(maintenance: MaintenanceI): Observable<MaintenanceI> {
   return this.http.post<MaintenanceI>(this.base_path_post, maintenance).pipe(
     tap((res: MaintenanceI) => {
       if (res) {
         // Crear usuario
         // console.log('registro insertado');
       }
     }),
     catchError(this.handleError))
 }

 // Get single student data by ID
 getItem(id: number): Observable<{maintenance:MaintenanceI}> {
   return this.http
     .get<{maintenance:MaintenanceI}>(this.base_path_get + '/' + id)
     .pipe(
       retry(0),
       catchError(this.handleError)
     )
 }
 getUrl(url: string): Observable<{maintenance:MaintenanceI}> {
  return this.http
    .post<{maintenance:MaintenanceI}>(this.base_path_get + '/url',{url:url})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}
getclave(clave: string): Observable<{maintenance:MaintenanceI}> {
  return this.http
    .post<{maintenance:MaintenanceI}>(this.base_path_get + '/clave',{clave:clave})
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}
 // Get students data

 getList(): Observable<{ maintenances: MaintenanceI[] }> {
   return this.http
     .get<{ maintenances: MaintenanceI[] }>(this.base_path_get)
     .pipe(
       retry(0),
       catchError(this.handleError)
     )
 }

 // Update item by id
 updateItem(id:number, maintenance:MaintenanceI): Observable<MaintenanceI> {
   return this.http
     .patch<MaintenanceI>(this.base_path_get + '/' + id, JSON.stringify(maintenance), this.httpOptions)
     .pipe(
       retry(0),
       catchError(this.handleError)
     )
 }

 // Delete item by id
 deleteItem(id:number) {
   return this.http
     .delete<MaintenanceI>(this.base_path_get + '/' + id, this.httpOptions)
     .pipe(
       retry(0),
       catchError(this.handleError)
     )
 }
}
