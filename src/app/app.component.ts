
import {  PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth/auth.service';
// import { forkJoin, Observable } from 'rxjs';
import { MaintenanceService } from './core/services/auth/maintenance.service';
import { Router } from '@angular/router';
// const translate = require('translate');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppTuristica';
  mantenimiento:boolean = false;
  video: string='assets/video/manteni.mp4';
  constructor(
    private primengConfig: PrimeNGConfig,
    private maintenanceService: MaintenanceService,
    private router: Router,
    private authService: AuthService, 

   ) {}

  ngOnInit() {
    // console.log(this.router.url)
    this.maintenanceService.getUrl('/').subscribe((cnt_groupFromApi)=>{
      if(cnt_groupFromApi.maintenance != null){
            this.mantenimiento= true
            this.cerrarSesion()
            // console.log('aquii')
        }else{
          this.mantenimiento= false

        }
        // console.log(this.mantenimiento)

        if(this.mantenimiento == true){
          this.router.navigateByUrl('/mantenimiento');
        }
     
    })
    this.primengConfig.ripple = true; 
  }

  cerrarSesion(){
    this.setLogin(false)
    this.authService.logout()
    this.ngOnInit()
    this.router.navigateByUrl('/login')
    }

    setLogin(value: boolean): void {
      this.authService.setLogin(value);
      }
}

