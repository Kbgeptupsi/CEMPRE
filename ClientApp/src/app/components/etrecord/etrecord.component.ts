import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etrecord',
  templateUrl: './etrecord.component.html',
  styleUrls: ['./etrecord.component.css']
})
export class EtrecordComponent implements OnInit {

  private pag:number = 0;
  private max:number = 1;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

  sig(){
    this.pag>=this.max ? this.pag=0 : this.pag += 1;    
  }

  ant(){
    this.pag<=0 ? this.pag=this.max : this.pag -= 1;
  }

}
