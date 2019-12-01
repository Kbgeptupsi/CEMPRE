
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
import { PrsearchComponent } from './components/prsearch/prsearch.component';
import { PpratingComponent } from './components/pprating/pprating.component';
import { PpstatusComponent } from './components/ppstatus/ppstatus.component';
import { CsstatusComponent } from './components/csstatus/csstatus.component';
import { CsdeleteComponent } from './components/csdelete/csdelete.component';
import { CpselectionComponent } from './components/cpselection/cpselection.component';
import { CpsearchComponent } from './components/cpsearch/cpsearch.component';
import { TrrecordComponent } from './components/trrecord/trrecord.component';
import { TrsearchComponent } from './components/trsearch/trsearch.component';
import { TfrecordComponent } from './components/tfrecord/tfrecord.component';
import { TfsearchComponent } from './components/tfsearch/tfsearch.component';
import { EtrecordComponent } from './components/etrecord/etrecord.component';
import { EtsearchComponent } from './components/etsearch/etsearch.component';
import { EpsearchComponent } from './components/epsearch/epsearch.component';
import { EpdeleteComponent } from './components/epdelete/epdelete.component';
import { EprecordComponent } from './components/eprecord/eprecord.component';

//import {  } from './components/';


const routes: Routes = [
  /*{
    path:'',
    component:Component
  },*/
  {
    path:'employee/practice/delete',
    component:EpdeleteComponent
  },
  {
    path:'employee/practice/search',
    component:EpsearchComponent
  },
  {
    path:'employee/practice/record',
    component:EprecordComponent
  },
  {
    path:'employee/teacher/search',
    component:EtsearchComponent
  },
  {
    path:'employee/teacher/record',
    component:EtrecordComponent
  },
  {
    path:'teacher/fault/search',
    component:TfsearchComponent
  },
  {
    path:'teacher/fault/record',
    component:TfrecordComponent
  },
  {
    path:'teacher/rating/search',
    component:TrsearchComponent
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
    path:'practiceer/request/search',
    component:PrsearchComponent
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
    path:'employee/practiceer',
    component:EgpracticeersComponent
  },
  {
    path:'employee/teacher',
    component:EgteachersComponent
  },
  {
    path:'employee/practice',
    component:EgpracticesComponent
  },
  {
    path:'employee/company',
    component:EgcompaniesComponent
  },
  {
    path:'report',
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
    path:'teacher/rating',
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
