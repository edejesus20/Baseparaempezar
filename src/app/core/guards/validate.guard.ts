import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
     
        if (this.authService.getToken() == of(false)) {
        this.router.navigateByUrl('/login');
        return of(false);
      }
      return of(true)
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean >|  boolean {
      // console.log('canLand')
      if (this.authService.getToken() == of(false)) {
        this.router.navigateByUrl('/login');
        return of(false);
      }
      return of(true)
  }
}
