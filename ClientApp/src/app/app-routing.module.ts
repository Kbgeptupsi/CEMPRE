
/*import { CommonModule } from '@angular/common';*/
import { HelpPracticeerComponent } from'./components/help-practiceer/help-practiceer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordPracticeerComponent } from './components/record-practiceer/record-practiceer.component';
import { InfoCempreComponent } from './components/info-cempre/info-cempre.component';
import { RecordTeacherComponent } from './components/record-teacher/record-teacher.component';
import { RecordCompanyComponent } from './components/record-company/record-company.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent  }  from './components/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'help/practiceer',
    component:HelpPracticeerComponent
  },
  {
    path:'record/practiceer',
    component:RecordPracticeerComponent
  },
  {
    path:'info/cempre',
    component:InfoCempreComponent
  },
  {
    path:'record/teacher',
    component:RecordTeacherComponent
  },
  {
    path:'record/company',
    component:RecordCompanyComponent
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
