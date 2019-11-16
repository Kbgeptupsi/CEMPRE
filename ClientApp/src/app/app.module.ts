import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { PracticantesGuiaComponent } from './practicantes-guia/practicantes-guia.component';
import { FormularioPracticanteComponent } from './formulario-practicante/formulario-practicante.component';
import { InfoCempreComponent } from './info-cempre/info-cempre.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/services/in-memory-data.service';
import { FormularioDocenteComponent } from './formulario-docente/formulario-docente.component';
import { FormularioEmpresasComponent } from './formulario-empresas/formulario-empresas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
   
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
    
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      
    ]),
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{ dataEncapsulation: false }),
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
