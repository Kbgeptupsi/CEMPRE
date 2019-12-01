import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'record-company',
  templateUrl: './record-company.component.html',
  styleUrls: ['./record-company.component.css']
})
export class RecordCompanyComponent implements OnInit {

  private pag:number = 0;
  private max:number = 2;

  constructor(private companyS:CompanyService) { }

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
