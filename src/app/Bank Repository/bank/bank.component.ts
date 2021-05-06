import { Component, OnInit } from '@angular/core';
import { Bank } from '../../shered/model/bank';
import { BankOffres } from '../../shered/model/bankOffres';
import { BankServiceService } from '../../services/bank-service.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {

  banks: Bank[] ;
  name: string;
offres:BankOffres[];

  constructor(private bankservice:BankServiceService) { }

  ngOnInit(): void {
    this.bankservice.getAll().subscribe((data: Bank[])=>{
        console.log(data);
        this.banks = data;
      }
    )
  }
  getOffres(bankcli:any){
    console.log(bankcli)
    this.bankservice.getBankOffreByName(bankcli.name).subscribe((data: BankOffres[])=>{
        console.log(data);
        this.offres= data;
      }
    )
    console.log(this.offres);
  }

}
