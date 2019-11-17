import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable,Inject } from '@angular/core';
import { Practiceer } from '../models/practiceer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class PracticeerService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
{
}
addPracticeer(practicante: Practiceer): Observable<Practiceer>{
  return this.http.post<Practiceer>(this.baseUrl+'api/Practiceer', practicante, httpOptions).pipe(
  tap((newPracticante: Practiceer) => this.log(`se Añadio un nuevo practicante w/ id=${newPracticante.id}`)),
  catchError(this.handleError<Practiceer>('AgregadoNuevoPracticante'))
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
