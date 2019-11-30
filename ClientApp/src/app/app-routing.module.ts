
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
import { EmployeeComponent } from './components/employee/employee.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { PracticeerComponent } from './components/practiceer/practiceer.component';
import { CompanyComponent } from './components/company/company.component';
import { TgfaultsComponent } from './components/tgfaults/tgfaults.component';
import { TgplaceComponent } from './components/tgplace/tgplace.component';
import { TgpracticeersComponent } from './components/tgpracticeers/tgpracticeers.component';
import { TgrankingsComponent } from './components/tgrankings/tgrankings.component';
import { CgpracticeersComponent } from './components/cgpracticeers/cgpracticeers.component';
import { CgpracticesComponent } from './components/cgpractices/cgpractices.component';
import { CgplacesComponent } from './components/cgplaces/cgplaces.component';
import { CgsubscribedComponent } from './components/cgsubscribed/cgsubscribed.component';
import { PgpracticesComponent } from './components/pgpractices/pgpractices.component';
import { PgrequestsComponent } from './components/pgrequests/pgrequests.component';
import { PgsubscribedComponent } from './components/pgsubscribed/pgsubscribed.component';
import { EgpracticeersComponent } from './components/egpracticeers/egpracticeers.component';
import { EgpracticesComponent } from './components/egpractices/egpractices.component';
import { EgteachersComponent } from './components/egteachers/egteachers.component';
import { EgreportsComponent } from './components/egreports/egreports.component';
import { EgcompaniesComponent } from './components/egcompanies/egcompanies.component';
import { PsdeleteComponent } from './components/psdelete/psdelete.component';
import { PsmodComponent } from './components/psmod/psmod.component';
import { PrrecordComponent } from './components/prrecord/prrecord.component';
import { PrmodComponent } from './components/prmod/prmod.component';
import { PrdeleteComponent } from './components/prdelete/prdelete.component';
import { PpratingComponent } from './components/pprating/pprating.component';
import { PpstatusComponent } from './components/ppstatus/ppstatus.component';

//import {  } from './components/';


const routes: Routes = [
  /*{
    path:'',
    component:Component
  },*/
  {
    path:'practiceer/practice/status',
    component:PpstatusComponent
  },
  {
    path:'practiceer/practice/ratings',
    component:PpratingComponent
  },
  {
    path:'practiceer/request/delete',
    component:PrdeleteComponent
  },
  {
    path:'practiceer/request/modify',
    component:PrmodComponent
  },
  {
    path:'practiceer/request/record',
    component:PrrecordComponent
  },
  {
    path:'practiceer/subscribed/modify',
    component:PsmodComponent
  },
  {
    path:'practiceer/subscribed/delete',
    component:PsdeleteComponent
  },
  {
    path:'employee/practiceers',
    component:EgpracticeersComponent
  },
  {
    path:'employee/teachers',
    component:EgteachersComponent
  },
  {
    path:'employee/practices',
    component:EgpracticesComponent
  },
  {
    path:'employee/companies',
    component:EgcompaniesComponent
  },
  {
    path:'reports',
    component:EgreportsComponent
  },
  {
    path:'practiceer/subscribed',
    component:PgsubscribedComponent
  },
  {
    path:'practiceer/request',
    component:PgrequestsComponent
  },
  {
    path:'practiceer/practice',
    component:PgpracticesComponent
  },
  {
    path:'company/subscribed',
    component:CgsubscribedComponent
  },
  {
    path:'company/places',
    component:CgplacesComponent
  },
  {
    path:'company/practices',
    component:CgpracticesComponent
  },
  {
    path:'company/practiceers',
    component:CgpracticeersComponent
  },
  {
    path:'teacher/rankings',
    component:TgrankingsComponent
  },
  {
    path:'teacher/practiceers',
    component:TgpracticeersComponent
  },
  {
    path:'teacher/places',
    component:TgplaceComponent
  },
  {
    path:'teacher/faults',
    component:TgfaultsComponent
  },
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'practiceer',
    component:PracticeerComponent
  },
  {
    path:'teacher',
    component:TeacherComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
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
