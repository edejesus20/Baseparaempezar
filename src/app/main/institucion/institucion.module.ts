import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitucionRoutingModule } from './institucion-routing.module';
import { InstitucionComponent } from './institucion.component';
import { EliminarUniversidadComponent } from './components/universidad/eliminar-universidad/eliminar-universidad.component';
import { EditarUniversidadComponent } from './components/universidad/editar-universidad/editar-universidad.component';
import { CrearUniversidadComponent } from './components/universidad/crear-universidad/crear-universidad.component';
import { MostrarUnaUniversidadComponent } from './components/universidad/mostrar-una-universidad/mostrar-una-universidad.component';
import { MostrarUniversidadComponent } from './components/universidad/mostrar-universidad/mostrar-universidad.component';


@NgModule({
  declarations: [
    InstitucionComponent,
    CrearUniversidadComponent,
    EditarUniversidadComponent,
    EliminarUniversidadComponent,
    MostrarUnaUniversidadComponent,
    MostrarUniversidadComponent
  ],
  imports: [
    CommonModule,
    InstitucionRoutingModule
  ]
})
export class InstitucionModule { }
