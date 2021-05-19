import {Component, OnInit} from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';
import {BankServiceService} from '../../services/bank-service.service';
import {BankOffres} from '../../shered/model/bankOffres';







@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {
show=false
  credit:Credit={
    creditId:1,
    amount:1000,
    period:20,
    interestRate:7,
    monthlyPayment:0,
    total:0
  }
  resalt:Credit={
    creditId:1,
    amount:50000,
    period:20,
    interestRate:7,
    monthlyPayment:7.752,
    total:0
  }

  listOffer:BankOffres[]




  constructor( private simulationService:SimulationServiceService,
               private bankService:BankServiceService) { }

  ngOnInit(): void {
    this.credit
    this.formatLabel;

    this.listOffer
  }
getBestOffer(){
   console.log(this.resalt)
    this.bankService.getBestOffre(this.resalt).subscribe(data=>{
      this.listOffer=data
      console.log(data)
    })
}
  simulate(){
    this.show=false
    this.simulationService.simulationByIr(this.credit).subscribe((res:Credit) => {
      console.log(res);
      this.resalt=res;
this.getBestOffer()
this.show=true

    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    else return value;

  }
}
