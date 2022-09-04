import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {listaMenuI } from '../../../models/menu';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnonimoService {

  API_URI = environment.API_URI;

   // API path
   base_path_get = `${this.API_URI}/api/mainDefault`;

  constructor(
    private http: HttpClient,
  ) { }

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
getMenu(): Observable<{ mainDefault: listaMenuI[] }> {
  return this.http
    .get<{ mainDefault: listaMenuI[] }>(this.base_path_get)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}


}
