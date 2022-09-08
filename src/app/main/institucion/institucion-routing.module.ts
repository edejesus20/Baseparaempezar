import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUniversidadComponent } from './components/universidad/crear-universidad/crear-universidad.component';
import { EditarUniversidadComponent } from './components/universidad/editar-universidad/editar-universidad.component';
import { EliminarUniversidadComponent } from './components/universidad/eliminar-universidad/eliminar-universidad.component';
import { MostrarUnaUniversidadComponent } from './components/universidad/mostrar-una-universidad/mostrar-una-universidad.component';
import { MostrarUniversidadComponent } from './components/universidad/mostrar-universidad/mostrar-universidad.component';
import { InstitucionComponent } from './institucion.component';

const routes: Routes = [
  {
    // ruta inicial del modulo
    path: '',
    component: InstitucionComponent, //nombre del component principal del modulo
    children:[
        //rutas hijas
        {
          path: 'mostrar_universitys',
          component: MostrarUniversidadComponent,//cada subcomponent - crud
        },
        {
          path: 'mostrar_university/:id',
          component: MostrarUnaUniversidadComponent,//cada subcomponent - crud
        },
        {
          path: 'create_university',
          component: CrearUniversidadComponent,//cada subcomponent - crud
        },
        {
          path: 'edit_university/:id',
          component: EditarUniversidadComponent,//cada subcomponent - crud
        },
        {
          path: 'delete_university/:id',
          component: EliminarUniversidadComponent,//cada subcomponent - crud
        },
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitucionRoutingModule { }
