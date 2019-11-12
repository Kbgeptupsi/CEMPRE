
import { CommonModule } from '@angular/common';
import {PracticantesGuiaComponent} from'./practicantes-guia/practicantes-guia.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {FormularioPracticanteComponent} from './formulario-practicante/formulario-practicante.component';

const routes: Routes = [
  {
  path:'PracticantesGuia',
  component:PracticantesGuiaComponent
  },
  {
    path:'FormularioPracticantes',
    component:FormularioPracticanteComponent
    }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
