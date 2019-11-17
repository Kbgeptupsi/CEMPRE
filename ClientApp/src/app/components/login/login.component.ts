import { Component, OnInit } from '@angular/core';

import { Login } from '../../models/login';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login:Login;
  incorrect:boolean=false;
  exito:boolean =false;

  constructor(private loginS:LoginService) { }

  ngOnInit() {
    this.login = new Login();
  }

  validar():void{
    this.incorrect=false;
    this.exito=false;
    this.loginS.ip().subscribe(
      (data) => {
        this.intoValidate(data.ip);
      },
      () => {
        //ENTRADA PARA PODER DESAROLLAR; DEBE QUITARSE
        this.intoValidate("NotNetwork");
      }
    );
  }

  private intoValidate(data:string){
    this.login.ip = data;
    this.loginS.logIn(this.login).subscribe(
      (user) => {
        this.exito = true;
        this.goBack();
      },
      (error) => this.incorrect = true,
    );
  }

  goBack():void{
    location.pathname="principal";
  }

}
