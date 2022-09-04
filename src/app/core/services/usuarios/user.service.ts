import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { CambiarPasswordI } from 'src/app/models/authorization/usr_CambiarPassword';
import { UserI } from 'src/app/models/authorization/usr_User';
import { PersonI } from 'src/app/models/user/person';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = environment.API_URI;

  // API path
  base_path = `${this.API_URI}/api/user`;
  base_path_post = `${this.API_URI}/api/user`;
  base= `${this.API_URI}/api/change-password`;
  constructor(private http: HttpClient,
    ) {  
  }

  // Http Options


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
getUser(): Observable<{users: UserI[],rolesUsers:any[]}> {
  let token : string | null=localStorage.getItem('token')
  let user : string | null=localStorage.getItem('user')
  if(token != null && user != null) {
    let userObjeto:any = JSON.parse(user); 
    return this.http
      .get<{users: UserI[],rolesUsers:any[]}>(this.base_path, { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })})
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }else{
    return this.http
    .get<{users: UserI[],rolesUsers:any[]}>(this.base_path)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
}



UsersInvestigatorStudentTeacherProyecto(formValue:any): Observable<{teachers: any[], estudiantes : any[],investigator_collaborators: any[]}> {
  let token : string | null=localStorage.getItem('token')
  let user : string | null=localStorage.getItem('user')
  if(token != null && user != null) {
    let userObjeto:any = JSON.parse(user); 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })
    }
    // console.log(httpOptions)
    return this.http
      .post<{teachers: any[], estudiantes : any[],investigator_collaborators: any[]}>(this.API_URI+'/api/UsersInvestigatorStudentTeacherProyecto/',formValue,httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }else{
    return this.http
    .post<{teachers: any[], estudiantes : any[],investigator_collaborators: any[]}>(this.API_URI+'/api/UsersInvestigatorStudentTeacherProyecto/',formValue)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
}


getUserteacherinvestigatorstudent2(id:number): Observable<{users: any[]}> {
  let token : string | null=localStorage.getItem('token')
  let user : string | null=localStorage.getItem('user')
  if(token != null && user != null) {
    let userObjeto:any = JSON.parse(user); 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })
    }
    // console.log(httpOptions)
    return this.http
      .get<{users: any[]}>(this.API_URI+'/api/userteacherinvestigatorstudent2/'+id,httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }else{
    return this.http
    .get<{users: any[]}>(this.API_URI+'/api/userteacherinvestigatorstudent/'+id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
}
getUserteacherinvestigatorstudent(): Observable<{teachers: any[], estudiantes : any[],investigator_collaborators: any[]}> {
  let token : string | null=localStorage.getItem('token')
  let user : string | null=localStorage.getItem('user')
  if(token != null && user != null) {
    let userObjeto:any = JSON.parse(user); 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })
    }
    // console.log(httpOptions)
    return this.http
      .get<{teachers: any[], estudiantes : any[],investigator_collaborators: any[]}>(this.API_URI+'/api/userteacherinvestigatorstudent/',httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }else{
    return this.http
    .get<{teachers: any[], estudiantes : any[],investigator_collaborators: any[]}>(this.API_URI+'/api/userteacherinvestigatorstudent/')
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
}


userteacher(): Observable<{users: any[],usersestudiente: any[],
  userseadministrative:any[],usersInvestigador:any[],ResponsibleBodyUser:any[]}> {
  let token : string | null=localStorage.getItem('token')
  let user : string | null=localStorage.getItem('user')
  if(token != null && user != null) {
    let userObjeto:any = JSON.parse(user); 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })
    } 
    // console.log(httpOptions)
    return this.http
      .get<{users: any[],usersestudiente: any[],userseadministrative:any[],usersInvestigador:any[],ResponsibleBodyUser:any[]}>
      (this.API_URI + '/api/userteacher',httpOptions)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }else{
    return this.http
    .get<{users: any[],usersestudiente: any[],userseadministrative:any[],usersInvestigador:any[],ResponsibleBodyUser:any[]}>(this.API_URI + '/api/userteacher')
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
}

getUserIdentificacion(cc:string): Observable<{ user: UserI }> {
  return this.http
    .get<{ user: UserI }>(this.base_path+ '/cc/' + cc)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
}

// Get single student data by ID
getOneUser(id: number): Observable<{ user: UserI ,rolesUsers:any[]}> {
  let user : string | null=localStorage.getItem('user')
  let token : string | null=localStorage.getItem('token')
  if(token != null && user != null) {
    let userObjeto:any = JSON.parse(user); 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })
    }
  return this.http
    .get<{ user: UserI ,rolesUsers:any[]}>(this.base_path + '/' + id,httpOptions)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }else{
    return this.http
    .get<{ user: UserI ,rolesUsers:any[]}>(this.base_path + '/' + id)
    .pipe(
      retry(0),
      catchError(this.handleError)
    )
  }
}



// createUser(person: any): Observable<{ person: any }> {
//   return this.http
//     .post<{ person: any }>(this.base_path, JSON.stringify(person))
//     .pipe(
//       retry(0),
//       catchError(this.handleError)
//     )
// }

createUser(person: any): Observable<any> {
  return this.http.post<any>(this.base_path_post, person).pipe(
    tap((res: PersonI) => {
      if (res) {
        // Crear usuario
        // console.log('registro insertado');
      }
    }),
    catchError(this.handleError))
}


actualzarContraseña(contraseña: CambiarPasswordI): Observable<{ user: CambiarPasswordI }> {
  let token : string | null=localStorage.getItem('token')
  let userT :string | null= localStorage.getItem('user');
  if(token != null && userT != null) {
    let userObjeto:any = JSON.parse(userT); 
    // console.log(userObjeto)
    let algo ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      }),
    }
    // console.log(algo)
    return this.http
    .patch<{ user: CambiarPasswordI }>(this.base+'/', JSON.stringify(contraseña),algo
    )
    .pipe(retry(0),catchError(this.handleError))
  }else{
      return this.http
      .patch<{ user: CambiarPasswordI }>(this.base+'/', JSON.stringify(contraseña))
      .pipe(retry(0),catchError(this.handleError)) 
    }
}

updateUser(user:any){
  let token : string | null=localStorage.getItem('token')
  let userT :string | null= localStorage.getItem('user');
  if(token != null && userT != null) {
    let userObjeto:any = JSON.parse(userT); 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })
    }
    // console.log('aqui')
    return this.http.patch(`${this.base_path}/${user.id}`, user,httpOptions)
    .pipe(retry(0),catchError(this.handleError))
  }else{
    return this.http.patch(`${this.base_path}/${user.id}`, user)
      .pipe(retry(0),catchError(this.handleError)) 
    }

  // return this.http.patch(`${this.base_path}/${user.id}`, user).pipe(
  //   retry(0),
  //   catchError(this.handleError)
  // )

}


actualzarAvatar(user:any){
  let token : string | null=localStorage.getItem('token')
  let userT :string | null= localStorage.getItem('user');
  if(token != null && userT != null) {
    let userObjeto:any = JSON.parse(userT); 
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-token':token,
        'user':`${parseInt(userObjeto.id)}`
      })
    }
    // console.log(user)
  return this.http.patch(`${this.API_URI}/api/Avatar/${user.id}`, user,httpOptions).pipe(
    retry(0),
    catchError(this.handleError)
  )
}else{
  return this.http.patch(`${this.API_URI}/api/Avatar/${user.id}`, user).pipe(
    retry(0),
    catchError(this.handleError)
  )
  }

}

eliminarUser(id:number){
  return this.http.delete(`${this.base_path}/${id}`).pipe(
    retry(0),
    catchError(this.handleError)
  )
}

// createImagen(formData:any){

//     return this.http.post('http://localhost:4000/api/subir',JSON.stringify(formData))
//     .pipe(
//       retry(0),
//       catchError(this.handleError)
//     )
//   }

// }
createImagen(UserId: string,file:any): Observable<any> {
  let form= new FormData();//Crea un formulario
  form.append('UserId',UserId);
  form.append('file',file);//Asigna el campo File
console.log(file,'FormData')

  // return this.http.post<any>(this.API_URI + '/api/file/FormacionDocente',form).pipe(
    return this.http.post<any>(this.API_URI + '/api/subirImagen',form).pipe(
    tap((res: any) => {
      if (res) {
      }
    }),
    retry(0),
    catchError(this.handleError))
}


}
