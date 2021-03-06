import { Component, OnInit } from '@angular/core';
import { Practiceer } from '../../models/practiceer';
import { PracticeerService} from '../../services/practiceer.service';

@Component({
  selector: 'record-practiceer',
  templateUrl: './record-practiceer.component.html',
  styleUrls: ['./record-practiceer.component.css']
})
export class RecordPracticeerComponent implements OnInit {

  private pag:number = 0;
  private max:number = 4;

  constructor(private practicanteService: PracticeerService) { }
  practicante: Practiceer;

  ngOnInit() {
    window.scrollTo(0,0);
    this.practicante={id:1,names:'',secondsurname:'',firstsurname:'',statecivil:'',adress:'',telephone:1,placeofbirth:'',profile:'',date1:'',date2:'',date3:'',date4:'',datep7:'',p3:'',p4:'',p5:'',p6:'',entity:'',entity2:'',load:'',load2:''
  ,funtion:'',funtion2:'',institution1:'',institution2:'',institution3:'',institution4:'',title1:'',title2:'',title3:'',title4:'',email:'',city:'',datep71:''  }
  }
  
  add() {
    this.practicanteService.addPracticeer(this.practicante)
    .subscribe(task => {
    alert('Se agrego un nuevo practicante')
    });
  }

  sig(){
    this.pag>=this.max ? this.pag=0 : this.pag += 1;    
  }

  ant(){
    this.pag<=0 ? this.pag=this.max : this.pag -= 1;
  }
  
}
