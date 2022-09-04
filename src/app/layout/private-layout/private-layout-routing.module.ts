import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateGuard } from 'src/app/core/guards/validate.guard';
import { LandingComponent } from './landing/landing.component';
import { PrivateLayoutComponent } from './private-layout.component';

const routes: Routes = [ 
  {
    path: '',
    component: PrivateLayoutComponent,
    canActivate: [ValidateGuard],
    canLoad:[ValidateGuard],
    children: [
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../main/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateLayoutRoutingModule { }
