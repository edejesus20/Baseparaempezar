import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { listaMenuI } from 'src/app/models/menu';
import { catchError, retry, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { UserI, UserLoginI, UserLoginResponseI } from 'src/app/models/authorization/usr_User';
import { environment } from 'src/environments/environment';
import { createMenu } from 'src/app/consts/menu';
import *as moment from 'moment';
import { Router } from '@angular/router';

const KEY_TOKEN = 'token';
const KEY_USER = 'user';
const KEY_MENU = 'menu';
const KEY_FECHA = 'fecha';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = environment.API_URI;
  public _KEY_CODE_TOKEN='';
  public _KEY_MENU='';
  
  private _isLoggedIn = false;
  public isLoggedIn$ = new BehaviorSubject(this._isLoggedIn);
  // public KEY_CODE_TOKEN$ = new BehaviorSubject(this._KEY_CODE_TOKEN);
  public userLoginResponse:UserLoginResponseI={
    user:{username:'',id:0},
    token: '',
    menu:undefined
  }
 
  public userLoginResponse$ = new BehaviorSubject(this.userLoginResponse);
  // API path
  base_path_get = `${this.API_URI}/api/mainSesionAdmin`;
  base_path_get2 = `${this.API_URI}/api/mainSesion`;
  base_path_get_login = `${this.API_URI}/api/login`;

  constructor(
    private http: HttpClient,
    private router: Router,
   
  ) { 
    // this.getToken()
  }

  public get isLoggedIn() {
    return this._isLoggedIn;
  }
  public get KEY_CODE_TOKEN() {
    return this._KEY_CODE_TOKEN;
  }
  public get KEY_MENU() {
    return this._KEY_MENU;
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

  getMenu(): Observable<{ mainSesionAdmin: listaMenuI[] }> {
    return this.http
      .get<{ mainSesionAdmin: listaMenuI[] }>(this.base_path_get)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  getMenu2(userLoginResponse:UserLoginResponseI): Observable<{ mainSesion: listaMenuI[] }> {
    const data={
      userId:userLoginResponse.user.id,
      token:userLoginResponse.token,
    }
    return this.http
      .post<{ mainSesion: listaMenuI[] }>(this.base_path_get2,data)
      .pipe(
        retry(0),
        catchError(this.handleError)
      )
  }

  setLogin(value: boolean): void {
    this._isLoggedIn = value;
    this.isLoggedIn$.next(value);
  }

  public register(user: UserI): Observable<UserLoginResponseI> {
    return this.http.post<UserLoginResponseI>(`${this.API_URI}/user`, user).pipe(tap(
      (res: UserLoginResponseI) => {
        if (res) {
          // localStorage.setItem(KEY_MENU, JSON.stringify(res.menu));
          this.userLoginResponse$.next(res)
          this.setLoginData(res);
          this.setLogin(true);
        }
      })
    );
  }
  login(dataLogin: UserLoginI): Observable<UserLoginResponseI> {
    return this.http.post<UserLoginResponseI>(this.base_path_get_login, dataLogin).pipe(tap(
      (res: UserLoginResponseI) => {
        if (res) {
          console.log(res)
          // localStorage.setItem(KEY_MENU, JSON.stringify(res.menu));
          this.setLoginData(res);
          this.userLoginResponse$.next(res)
          this.setLogin(true);
        
        }
      })
    );
  }

  private setLoginData(loginData: UserLoginResponseI): void {
    localStorage.setItem(KEY_TOKEN, loginData.token);
    this._KEY_CODE_TOKEN=loginData.token;
    this._KEY_MENU=loginData.menu
    let fecha =  moment();
    localStorage.setItem(KEY_FECHA, JSON.stringify(fecha));
    localStorage.setItem(KEY_USER, JSON.stringify(loginData.user));
    localStorage.setItem(KEY_MENU, JSON.stringify(loginData.menu));
    
  }

  public logout(): void {
    localStorage.removeItem(KEY_TOKEN);
    this._KEY_CODE_TOKEN='';
    this._KEY_MENU='';
    localStorage.removeItem(KEY_USER);
    localStorage.removeItem(KEY_FECHA);
    localStorage.removeItem(KEY_MENU);
    this.setLogin(false);
    this.router.navigateByUrl('/login');
    // this.getToken()
    // localStorage.removeItem(KEY_MENU);
    // TODO: Call logout service (backend) to remove TOKEN for sessions
  }
  public getToken(): Observable<boolean> | boolean {
    let fechanueva:string | undefined =localStorage.getItem('fecha')?.replace(/["]/g, '');
    let a = moment(moment(fechanueva).format("YYYY-MM-DD"));
    let b = moment(moment().format("YYYY-MM-DD"));
    let algo: number = b.diff(a, 'days');
    if(algo == 0){
    var token :string | null= JSON.stringify(localStorage.getItem('token'));
    var user :string | null= localStorage.getItem('user');
    var menu :string | null= localStorage.getItem('menu');
    // var menu :string | null= localStorage.getItem('menu');
    if(this.isLoggedIn$.value==true){
      // this.router.navigateByUrl('/dashboard');
      return true;
    }else{
      if (token!=null && user!=null && menu !== undefined) {
        let userObjeto:any = JSON.parse(user); 
        // let menuObjeto:any = JSON.parse(menu); 
        let userLoginResponse={
          user:userObjeto,
          token:token,
          menu:undefined
          // menu:menuObjeto
        }
        this.setLogin(true)
        this.userLoginResponse=userLoginResponse
        this.userLoginResponse$.next(userLoginResponse)
          // createMenu(menuObjeto.mainSesion)
          // this.router.navigateByUrl('/dashboard');
      return true;
    }
  }
    

  this.router.navigateByUrl('/landing');
  return false
  }else{
    localStorage.removeItem(KEY_TOKEN);
    this._KEY_CODE_TOKEN='';
    localStorage.removeItem(KEY_USER);
    localStorage.removeItem(KEY_FECHA);
    localStorage.removeItem(KEY_MENU);
    this.setLogin(false);
    this.router.navigateByUrl('/login');
    return false
  }

}
  // public verificarMantenimiento
}
