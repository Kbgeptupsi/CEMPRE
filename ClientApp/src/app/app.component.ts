import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  ver: boolean= false;
  //tipo:boolean = false;
  tipo:boolean = true;
  hide: boolean = false;
  hideMe: boolean = false;

  constructor(){
    
  }

  open():void{    
    this.validate();
    /*this.hide=true; 
    this.hideMe=true;*/ 
  }

  private validate():void{
    if(this.ver){
      this.ver=false;
    }
    else{
      this.hide=true;
      this.ver=true;
    }
  }
  
}
