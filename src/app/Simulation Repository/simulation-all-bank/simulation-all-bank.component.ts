import { Component, OnInit } from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';
import {MatDialog} from '@angular/material/dialog';

import {BankServiceService} from '../../services/bank-service.service';
import {Bank} from '../../shered/model/bank';

@Component({
  selector: 'app-simulation-all-bank',
  templateUrl: './simulation-all-bank.component.html',
  styleUrls: ['./simulation-all-bank.component.scss']
})
export class SimulationAllBankComponent implements OnInit {
  myMap = new Map();
  show=false;
  banks:Bank[]
  credit:Credit={
    creditId:1,
    amount:1000,
    period:20,
    interestRate:7,
    monthlyPayment:0,
    total :0
  }
  resalt:Credit;
  name:string;
  constructor(  private simulationService:SimulationServiceService,
                private bankService:BankServiceService,
                public dialog: MatDialog                      ) { }

  ngOnInit(): void {
    this.myMap
this.banks
  }


  simulate(){
    this.show=false;
    this.simulationService.simulationInAllBank(this.credit).subscribe((myMap) => {
      console.log(myMap);
this.myMap= new Map(Object.entries(myMap));
this.getBankByName()
this.fonction()
      this.show=true;


    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    else return value;

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
  getBankByName(){
    this.bankService.getAll().subscribe(data=>{
      this.banks=data;
      console.log(data)
    })
  }

}
