import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable,Inject } from '@angular/core';
import {Practicantes} from '../models/practicantes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class PracticantesService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
{
}
addPracticantes(practicante: Practicantes): Observable<Practicantes>{
  return this.http.post<Practicantes>(this.baseUrl+'api/Practicantes', practicante, httpOptions).pipe(
  tap((newPracticante: Practicantes) => this.log(`se Añadio un nuevo practicante w/ id=${newPracticante.id}`)),
  catchError(this.handleError<Practicantes>('AgregadoNuevoPracticante'))
  );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
  console.error(error);
  this.log(`${operation} failed: ${error.message}`);
  return of(result as T);
  };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  alert(`Servicio: ${message}`);
  }
}
