import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResourceI } from 'src/app/models/authorization/usr_resource';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  API_URI = environment.API_URI;

  // API path
  base_path = `${this.API_URI}/api/resource`;
  base = `${this.API_URI}/api/`;

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
// Get students data
getResource(): Observable<{resources: ResourceI[]}> {
  return this.http
    .get<{resources: ResourceI[]}>(this.base_path)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getOneResource(id: number): Observable<{ resource: ResourceI }> {
  return this.http
    .get<{ resource: ResourceI }>(this.base_path + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

getResourceIdentificacion(titulo:string): Observable<{ resource: ResourceI[] }> {
  return this.http
    .get<{ resource: ResourceI[] }>(this.base_path+ '/titulo/' + titulo)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

createResource(resource: ResourceI): Observable<{ resource: ResourceI }> {
  //console.log(resource,'----------------');
  return this.http
    .post<{ resource: ResourceI }>(this.base_path, JSON.stringify(resource), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

updateResource(resource:ResourceI){
  return this.http.patch(`${this.base_path}/${resource.id}`, resource).pipe(
    retry(0),
    catchError(this.handleError)
  )

}
eliminarResource(id:number){
  return this.http.delete(`${this.base_path}/${id}`).pipe(
    retry(0),
    catchError(this.handleError)
  )
}
}
