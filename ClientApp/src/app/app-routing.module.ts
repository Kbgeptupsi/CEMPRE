
/*import { CommonModule } from '@angular/common';*/
import {PracticantesGuiaComponent} from'./components/practicantes-guia/practicantes-guia.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {FormularioPracticanteComponent} from './components/formulario-practicante/formulario-practicante.component';
import { InfoCempreComponent } from './components/info-cempre/info-cempre.component';
import { FormularioDocenteComponent } from './components/formulario-docente/formulario-docente.component';
import { FormularioEmpresasComponent } from './components/formulario-empresas/formulario-empresas.component';
import { HomeComponent } from './components/home/home.component';

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
    },
    {
      path: 'app-home',
      component:HomeComponent
    },
    {
      path: '',
      component:HomeComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
