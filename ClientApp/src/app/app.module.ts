import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
/*import { RouterModule } from '@angular/router';*/

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpPracticeerComponent } from './components/help-practiceer/help-practiceer.component';
import { RecordPracticeerComponent } from './components/record-practiceer/record-practiceer.component';
import { InfoCempreComponent } from './components/info-cempre/info-cempre.component';
/*import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';*/
/*import { InMemoryDataService } from '../app/services/in-memory-data.service';*/
import { RecordTeacherComponent } from './components/record-teacher/record-teacher.component';
import { RecordCompanyComponent } from './components/record-company/record-company.component';
<<<<<<< HEAD
import { EmployeeComponent } from './employee/employee.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 1bb5223a46ed51264d7a642226b5fd0d781f1e89

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,   
    HelpPracticeerComponent,   
    RecordPracticeerComponent,   
    InfoCempreComponent,   
    RecordTeacherComponent,   
<<<<<<< HEAD
    RecordCompanyComponent, EmployeeComponent
=======
    RecordCompanyComponent, LoginComponent
>>>>>>> 1bb5223a46ed51264d7a642226b5fd0d781f1e89
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
