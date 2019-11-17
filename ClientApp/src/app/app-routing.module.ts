
/*import { CommonModule } from '@angular/common';*/
import {PracticantesGuiaComponent} from'./components/help-practiceer/help-practiceer.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {FormularioPracticanteComponent} from './components/record-practiceer/record-practiceer.component';
import { InfoCempreComponent } from './components/info-cempre/info-cempre.component';
import { FormularioDocenteComponent } from './components/record-teacher/record-teacher.component';
import { FormularioEmpresasComponent } from './components/record-company/record-company.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'help/practiceer',
    component:PracticantesGuiaComponent
  },
  {
    path:'record/practiceer',
    component:FormularioPracticanteComponent
    },
    {
      path:'info/cempre',
      component:InfoCempreComponent
    },
    {
      path:'record/teacher',
      component:FormularioDocenteComponent
    },
    {
      path:'record/company',
      component:FormularioEmpresasComponent
    },
    {
      path: 'home',
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
