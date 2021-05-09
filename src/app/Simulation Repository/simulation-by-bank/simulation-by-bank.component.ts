import {Component, Inject, OnInit} from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Unitprice} from '../../shered/model/unitprice';
import {ChartResultComponent} from '../chart-result/chart-result.component';
@Component({
  selector: 'app-simulation-by-bank',
  templateUrl: './simulation-by-bank.component.html',
  styleUrls: ['./simulation-by-bank.component.scss']
})
export class SimulationByBankComponent implements OnInit {

   myMap = new Map();


  credit:Credit={
    creditId:1,
    amount:1000,
    period:20,
    interestRate:7,
    monthlyPayment:0
  }
  name1:string;
  name:string;
  constructor( private simulationService:SimulationServiceService, private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.name1=this.myMap.get(1)
  }

  simulate(){
    this.simulationService.simulatsimulationbybank(this.credit,this.name).subscribe((data) => {

      this.myMap = new Map(Object.entries(data));

console.log(this.myMap);
this.open()
    });

}
open(){
  const dialogRef = this.dialog.open(ChartResultComponent,{
    height:"500px",
    width:"700px",
    data:this.myMap
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);

  })
}
}



