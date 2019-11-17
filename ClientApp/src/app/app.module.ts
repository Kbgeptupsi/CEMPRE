import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
/*import { RouterModule } from '@angular/router';*/

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { PracticantesGuiaComponent } from './components/help-practiceer/help-practiceer.component';
import { FormularioPracticanteComponent } from './components/record-practiceer/record-practiceer.component';
import { InfoCempreComponent } from './components/info-cempre/info-cempre.component';
/*import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';*/
/*import { InMemoryDataService } from '../app/services/in-memory-data.service';*/
import { FormularioDocenteComponent } from './components/record-teacher/record-teacher.component';
import { FormularioEmpresasComponent } from './components/record-company/record-company.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,   
    PracticantesGuiaComponent,   
    FormularioPracticanteComponent,   
    InfoCempreComponent,   
    FormularioDocenteComponent,   
    FormularioEmpresasComponent
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
