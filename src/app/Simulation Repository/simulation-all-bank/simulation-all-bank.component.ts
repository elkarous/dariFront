import { Component, OnInit } from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';
import {MatDialog} from '@angular/material/dialog';

import {ChartResultComponent} from '../chart-result/chart-result.component';

@Component({
  selector: 'app-simulation-all-bank',
  templateUrl: './simulation-all-bank.component.html',
  styleUrls: ['./simulation-all-bank.component.scss']
})
export class SimulationAllBankComponent implements OnInit {
  myMap = new Map();
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
  constructor( private simulationService:SimulationServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.myMap

  }
  simulate(){
    this.simulationService.simulationInAllBank(this.credit).subscribe((myMap) => {
      console.log(myMap);
this.myMap= new Map(Object.entries(myMap));

     this.open();
    });
  }
  open(){
    const dialogRef = this.dialog.open(ChartResultComponent,{
      height:"600px",
      width:"700px",
      panelClass:"dialog",
      data:this.myMap
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    })
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    else return value;

  }

}
