
/*import { CommonModule } from '@angular/common';*/
import { HelpPracticeerComponent } from'./components/help-practiceer/help-practiceer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordPracticeerComponent } from './components/record-practiceer/record-practiceer.component';
import { InfoCempreComponent } from './components/info-cempre/info-cempre.component';
import { RecordCompanyComponent } from './components/record-company/record-company.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent  }  from './components/login/login.component';
import { HelpCompanyComponent } from './components/help-company/help-company.component';
import { HelpTeacherComponent } from './components/help-teacher/help-teacher.component';

const routes: Routes = [
  {
    path:'help/company',
    component:HelpCompanyComponent
  },
  {
    path:'help/teacher',
    component:HelpTeacherComponent
  },
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
