import { Component, OnInit } from '@angular/core';
import {Unitprice} from '../../shered/model/unitprice';
import {SimulationComponent} from '../../Simulation Repository/simulation/simulation.component';
import {EstimationServiceService} from '../../services/estimation-service.service';

@Component({
  selector: 'app-unitprice',
  templateUrl: './unitprice.component.html',
  styleUrls: ['./unitprice.component.scss']
})
export class UnitpriceComponent implements OnInit {
unitprice:Unitprice;
  constructor(private estimationService:EstimationServiceService) { }

  ngOnInit(): void {
  this.unitprice=new Unitprice();
  }
  Add() {
    this.estimationService.create(this.unitprice).subscribe((res: any) => {
      console.log(this.unitprice);


    })
  }

}
