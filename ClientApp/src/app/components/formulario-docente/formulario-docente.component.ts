import { Component, OnInit } from '@angular/core';
import { Docentes } from '../../models/docentes';
import {DocenteService} from '../../services/docente.service';
@Component({
  selector: 'app-formulario-docente',
  templateUrl: './formulario-docente.component.html',
  styleUrls: ['./formulario-docente.component.css']
})
export class FormularioDocenteComponent implements OnInit {

  constructor(private docentesService: DocenteService) { }
  docente: Docentes;

 
  ngOnInit() {
    this.docente={id:1,names:'',secondsurname:'',firstsurname:'',statecivil:'',adress:'',telephone:1,placeofbirth:'',email:'',city:''}
  }

  add() {
    this.docentesService.addDocentes(this.docente)
    .subscribe(task => {
    alert('Se agrego un nuevo practicante')
    });
    }

}
