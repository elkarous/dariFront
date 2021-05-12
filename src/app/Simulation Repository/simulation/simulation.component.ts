import {Component, OnInit} from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';



import html2canvas from 'html2canvas';



@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent implements OnInit {

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
    amount:1000,
    period:20,
    interestRate:7,
    monthlyPayment:7.752,
    total:0
  }
  name:string;
  title = 'htmltopdf';




  constructor( private simulationService:SimulationServiceService) { }

  ngOnInit(): void {
    this.credit
    this.formatLabel;
    this.simulate()
  }

  simulate(){
    this.simulationService.simulationByIr(this.credit).subscribe((res:Credit) => {
      console.log(res);
      this.resalt=res;



    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    else return value;

  }
}
