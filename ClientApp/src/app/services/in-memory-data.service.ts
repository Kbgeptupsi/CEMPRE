import { Injectable,Inject } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Practicantes} from '../models/practicantes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  const Practicantes = [
  {id:''},
];
  return {Practicantes};
  }
  genId(Practicantess: Practicantes[]): number {
    return Practicantess.length > 0 ? Math.max(...Practicantess.map(Practicantes => Practicantes.id)) + 1 : 11;
}
}
