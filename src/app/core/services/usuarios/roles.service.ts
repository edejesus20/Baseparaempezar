import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { assinRoleResourceI } from 'src/app/models/authorization/usr_assinRoleResource';
import { assinRoleUserI } from 'src/app/models/usr_assinRoleUser';
import { RoleI } from 'src/app/models/authorization/usr_roles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  API_URI = environment.API_URI;

  // API path
  base_path = `${this.API_URI}/api/role`;
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
getRole(): Observable<{roles: RoleI[],rolesUsers:any[]}> {
  return this.http
    .get<{roles: RoleI[],rolesUsers:any[]}>(this.base_path)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getOneRole(id: number): Observable<{ role: RoleI,rolesUsers:any[] }> {
  return this.http
    .get<{ role: RoleI,rolesUsers:any[]}>(this.base_path + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}



createRole(role: RoleI): Observable<{ role: RoleI }> {
  //console.log(role,'----------------');
  return this.http
    .post<{ role: RoleI }>(this.base_path, JSON.stringify(role), this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

assinRole(role: assinRoleUserI): Observable<{ role: assinRoleUserI }> {
  let token : string | null=localStorage.getItem('token')
  let userT :string | null= localStorage.getItem('user');
  if(token != null && userT != null) {
    let userObjeto:any = JSON.parse(userT); 
     let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':userObjeto.id
      })
    }
  return this.http
    .post<{ role: assinRoleUserI }>(this.base + 'assinRole', JSON.stringify(role), httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }else{
    return this.http
    .post<{ role: assinRoleUserI }>(this.base + 'assinRole', JSON.stringify(role))
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
}

assinRoleResource(array: assinRoleResourceI): Observable<{ array: assinRoleResourceI }> {
  let token : string | null=localStorage.getItem('token')
  let userT :string | null= localStorage.getItem('user');
  if(token != null && userT != null) {
    let userObjeto:any = JSON.parse(userT); 
     let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':userObjeto.id
      })
    }
    return this.http
    .post<{ array: assinRoleResourceI }>(this.base + 'assinResourceRole', JSON.stringify(array), httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }else{
    return this.http
    .post<{ array: assinRoleResourceI }>(this.base + 'assinResourceRole', JSON.stringify(array))
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
  //console.log(role,'----------------');
 
}

updateRole(role:RoleI){
  return this.http.patch(`${this.base_path}/${role.id}`, role).pipe(
    retry(0),
    catchError(this.handleError)
  )

}
eliminarRole(id:number){
  return this.http.delete(`${this.base_path}/${id}`).pipe(
    retry(0),
    catchError(this.handleError)
  )
}

}
