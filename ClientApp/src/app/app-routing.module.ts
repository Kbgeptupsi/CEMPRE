
import { CommonModule } from '@angular/common';
import {PracticantesGuiaComponent} from'./practicantes-guia/practicantes-guia.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {FormularioPracticanteComponent} from './formulario-practicante/formulario-practicante.component';
import { InfoCempreComponent } from './info-cempre/info-cempre.component';
import { FormularioDocenteComponent } from './formulario-docente/formulario-docente.component';
import { FormularioEmpresasComponent } from './formulario-empresas/formulario-empresas.component';
const routes: Routes = [
  {
  path:'PracticantesGuia',
  component:PracticantesGuiaComponent
  },
  {
    path:'FormularioPracticantes',
    component:FormularioPracticanteComponent
    },
    {
      path:'infoCempre',
      component:InfoCempreComponent
    },
    {
      path:'FormularioDocentes',
      component:FormularioDocenteComponent
    },
    {
      path:'FormularioEmpresas',
      component:FormularioEmpresasComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
