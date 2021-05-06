import { Component, OnInit } from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';
import {ChartComponent} from '../chart/chart.component';
import {MatDialog} from '@angular/material/dialog';
import {color} from 'chart.js/helpers';

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
    monthlyPayment:0
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
    const dialogRef = this.dialog.open(ChartComponent,{
      height:"600px",
      width:"700px",
      panelClass:"dialog",
      data:this.myMap
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    })
  }

}
