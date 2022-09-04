import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './components/escritorio/general/general.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children:[
        //universidad
        {
          path: 'general',
          component: GeneralComponent,
        },
        ]
      }
];

  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
