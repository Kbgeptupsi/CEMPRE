import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Docentes} from '../models/docentes';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string )
  {
  }
  addDocentes(practicante: Docentes): Observable<Docentes>{
    return this.http.post<Docentes>(this.baseUrl+'api/Docentes', Docentes, httpOptions).pipe(
    tap((newDocente: Docentes) => this.log(`se Añadio un nuevo Docente w/ id=${newDocente.id}`)),
    catchError(this.handleError<Docentes>('AgregadoNuevoDocente'))
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
