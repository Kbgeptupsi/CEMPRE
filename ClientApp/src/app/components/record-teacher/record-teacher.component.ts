import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
import {DocenteService} from '../../services/teacher.service';
@Component({
  selector: 'record-teacher',
  templateUrl: './record-teacher.component.html',
  styleUrls: ['./record-teacher.component.css']
})
export class RecordTeacherComponent implements OnInit {

  constructor(private docentesService: DocenteService) { }
  docente: Teacher;

 
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
