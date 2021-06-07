import {Component, Inject, OnInit} from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';

import {BankServiceService} from '../../services/bank-service.service';
import {BankOffres} from '../../shered/model/bankOffres';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-simulation-by-bank',
  templateUrl: './simulation-by-bank.component.html',
  styleUrls: ['./simulation-by-bank.component.scss']
})
export class SimulationByBankComponent implements OnInit {

show=false
   myMap = new Map();
listOffer:BankOffres[];
names:string[]
  credit:Credit={
    creditId:1,
    amount:1000,
    period:20,
    interestRate:7,
    monthlyPayment:0,
    total:0
  }

  name:string;
  constructor( private simulationService:SimulationServiceService,
               private bankService :BankServiceService) { }

  ngOnInit(): void {
    this.getBankByName()

  }




  getOffers(){
    this.bankService.getBankOffreByName(this.name).subscribe(data=>{
      this.listOffer=data
    })
  }
getBankByName(){
    this.bankService.getBankName().subscribe(data=>{
      this.names=data;

    })
}
  simulate(){
    this.show=false;
    this.simulationService.simulatsimulationbybank(this.credit,this.name).subscribe((data) => {

      this.myMap = new Map(Object.entries(data));

     this.getOffers()
      this.fonction()
      this.show=true;
    });

}

  fonction() {
    let dataPoints = [];
    for ( var value of this.myMap.keys()) {

      dataPoints.push({ y:value ,a:this.myMap.get(value)});
    }
    setTimeout(() => {
      // [ bar-simple ] chart start
      // @ts-ignore
      Morris.Bar({
        element: 'morris-bar-chart',
        data: dataPoints,
        xkey: 'y',
        barSizeRatio: 0.5,
        barGap: 10,
        resize: true,
        responsive: true,
        ykeys: ['a'],
        labels: ["Monthly Payement"],
        barColors: ["#234099"]
      });


    })
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    else return value;

  }

}



