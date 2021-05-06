import { Component, OnInit } from '@angular/core';
import {Credit} from '../../shered/model/credit';
import {SimulationServiceService} from '../../services/simulation-service.service';

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
    monthlyPayment:0
  }
  resalt:Credit;
  name:string;
  constructor( private simulationService:SimulationServiceService) { }

  ngOnInit(): void {
    this.credit

  }
  simulate(){
    this.simulationService.simulationByIr(this.credit).subscribe((res:Credit) => {
      console.log(res);
      this.resalt=res;


    });
  }
}
