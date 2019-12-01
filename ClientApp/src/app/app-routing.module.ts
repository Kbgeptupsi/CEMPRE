
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
import { CsstatusComponent } from './components/csstatus/csstatus.component';
import { CsdeleteComponent } from './components/csdelete/csdelete.component';
import { CrdeleteComponent } from './components/crdelete/crdelete.component';
import { CrrecordComponent } from './components/crrecord/crrecord.component';
import { CrstatusComponent } from './components/crstatus/crstatus.component';
import { CpselectionComponent } from './components/cpselection/cpselection.component';
import { CpsearchComponent } from './components/cpsearch/cpsearch.component';
import { TrrecordComponent } from './components/trrecord/trrecord.component';
import { TrmodifyComponent } from './components/trmodify/trmodify.component';
import { TrdeleteComponent } from './components/trdelete/trdelete.component';
import { TfrecordComponent } from './components/tfrecord/tfrecord.component';
import { TfmodifyComponent } from './components/tfmodify/tfmodify.component';
import { TfdeleteComponent } from './components/tfdelete/tfdelete.component';

//import {  } from './components/';


const routes: Routes = [
  /*{
    path:'',
    component:Component
  },*/
  {
    path:'teacher/fault/delete',
    component:TfdeleteComponent
  },
  {
    path:'teacher/fault/modify',
    component:TfmodifyComponent
  },
  {
    path:'teacher/fault/record',
    component:TfrecordComponent
  },
  {
    path:'teacher/rating/delete',
    component:TrdeleteComponent
  },
  {
    path:'teacher/rating/modify',
    component:TrmodifyComponent
  },
  {
    path:'teacher/rating/record',
    component:TrrecordComponent
  },
  {
    path:'company/practiceer/search',
    component:CpsearchComponent
  },
  {
    path:'company/practiceer/selection',
    component:CpselectionComponent
  },
  {
    path:'company/request/status',
    component:CrstatusComponent
  },
  {
    path:'company/request/record',
    component:CrrecordComponent
  },
  {
    path:'company/request/delete',
    component:CrdeleteComponent
  },
  {
    path:'company/subscribed/delete',
    component:CsdeleteComponent
  },
  {
    path:'company/subscribed/status',
    component:CsstatusComponent
  },
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
    path:'company/place',
    component:CgplacesComponent
  },
  {
    path:'company/practiceer',
    component:CgpracticeersComponent
  },
  {
    path:'teacher/ranking',
    component:TgrankingsComponent
  },
  {
    path:'teacher/practiceer',
    component:TgpracticeersComponent
  },
  {
    path:'teacher/place',
    component:TgplaceComponent
  },
  {
    path:'teacher/fault',
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
