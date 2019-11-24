import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
/*import { RouterModule } from '@angular/router';*/

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpPracticeerComponent } from './components/help-practiceer/help-practiceer.component';
import { RecordPracticeerComponent } from './components/record-practiceer/record-practiceer.component';
import { InfoCempreComponent } from './components/info-cempre/info-cempre.component';
/*import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';*/
/*import { InMemoryDataService } from '../app/services/in-memory-data.service';*/
import { RecordTeacherComponent } from './components/record-teacher/record-teacher.component';
import { RecordCompanyComponent } from './components/record-company/record-company.component';
import { EmployeeComponent } from '../app/components/employee/employee.component';
import { LoginComponent } from '../app/components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HelpCompanyComponent } from './components/help-company/help-company.component';
import { HelpTeacherComponent } from './components/help-teacher/help-teacher.component';
import { MenuPracticeerComponent } from './components/menu-practiceer/menu-practiceer.component';
import { MenuCompanyComponent } from './components/menu-company/menu-company.component';
import { MenuDocentComponent } from './components/menu-docent/menu-docent.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { PracticeerComponent } from './components/practiceer/practiceer.component';
import { CompanyComponent } from './components/company/company.component';
import { TgpracticeersComponent } from './components/tgpracticeers/tgpracticeers.component';
import { TgrankingsComponent } from './components/tgrankings/tgrankings.component';
import { TgfaultsComponent } from './components/tgfaults/tgfaults.component';
import { TgplaceComponent } from './components/tgplace/tgplace.component';
import { CgpracticeersComponent } from './components/cgpracticeers/cgpracticeers.component';
import { CgsubscribedComponent } from './components/cgsubscribed/cgsubscribed.component';
import { CgplacesComponent } from './components/cgplaces/cgplaces.component';
import { CgpracticesComponent } from './components/cgpractices/cgpractices.component';
import { PgpracticesComponent } from './components/pgpractices/pgpractices.component';
import { PgrequestsComponent } from './components/pgrequests/pgrequests.component';
import { PgsubscribedComponent } from './components/pgsubscribed/pgsubscribed.component';
import { EgteachersComponent } from './components/egteachers/egteachers.component';
import { EgpracticeersComponent } from './components/egpracticeers/egpracticeers.component';
import { EgcompaniesComponent } from './components/egcompanies/egcompanies.component';
import { EgreportsComponent } from './components/egreports/egreports.component';
import { EgpracticesComponent } from './components/egpractices/egpractices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
    HelpPracticeerComponent,   
    RecordPracticeerComponent,   
    InfoCempreComponent,   
    RecordTeacherComponent,   
    RecordCompanyComponent,
    LoginComponent, 
    EmployeeComponent,
    MenuComponent,
    HelpCompanyComponent,
    HelpTeacherComponent,
    MenuPracticeerComponent,
    MenuCompanyComponent,
    MenuDocentComponent,
    TeacherComponent,
    PracticeerComponent,
    CompanyComponent,
    TgpracticeersComponent,
    TgrankingsComponent,
    TgfaultsComponent,
    TgplaceComponent,
    CgpracticeersComponent,
    CgsubscribedComponent,
    CgplacesComponent,
    CgpracticesComponent,
    PgpracticesComponent,
    PgrequestsComponent,
    PgsubscribedComponent,
    EgteachersComponent,
    EgpracticeersComponent,
    EgcompaniesComponent,
    EgreportsComponent,
    EgpracticesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,  
    FormsModule,
    AppRoutingModule,
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{ dataEncapsulation: false }),*/
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
