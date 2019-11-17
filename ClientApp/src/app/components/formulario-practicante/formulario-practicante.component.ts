import { Component, OnInit } from '@angular/core';
import { Practicantes } from '../../models/practicantes';
import { PracticantesService} from '../../services/practicantes.service';

@Component({
  selector: 'app-formulario-practicante',
  templateUrl: './formulario-practicante.component.html',
  styleUrls: ['./formulario-practicante.component.css']
})
export class FormularioPracticanteComponent implements OnInit {



  constructor(private practicanteService: PracticantesService) { }
  practicante: Practicantes;

  ngOnInit() {
    this.practicante={id:1,names:'',secondsurname:'',firstsurname:'',statecivil:'',adress:'',telephone:1,placeofbirth:'',profile:'',date1:'',date2:'',date3:'',date4:'',datep7:'',p3:'',p4:'',p5:'',p6:'',entity:'',entity2:'',load:'',load2:''
  ,funtion:'',funtion2:'',institution1:'',institution2:'',institution3:'',institution4:'',title1:'',title2:'',title3:'',title4:'',email:'',city:'',datep71:''  }
  }
  add() {
    this.practicanteService.addPracticantes(this.practicante)
    .subscribe(task => {
    alert('Se agrego un nuevo practicante')
    });
    }
}
