import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { House } from '../../shered/model/house';
import { EstimationServiceService } from '../../services/estimation-service.service';
import {Adresse} from '../../shered/model/adresse';
import {dateInputsHaveChanged} from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-estimation',
  templateUrl: './estimation.component.html',
  styleUrls: ['./estimation.component.scss']
})
export class EstimationComponent implements OnInit {
  resulat=new Map();
  house: House;
  showadresse=true;
  showkind=false;
  showb=false;
  show=false;
  shownb=false;
  constructor( private estimationservise: EstimationServiceService ) { }
  municipals :String[]=["select"]
  ngOnInit(): void {
    this.house = new House();
    this.house.adress=new Adresse();
    this.resulat;
    this.municipals
    this.getMunicipale()


  }
  next(){
    this.showadresse=!this.showadresse
    this.showkind=!this.showkind

  }
  next1(){

    this.showkind=!this.showkind
this.showb=!this.showb
  }
getMunicipale(){
    this.estimationservise.getAll().subscribe(data=>{
      for(let unit of data ){
        this.municipals.push(unit.municipal)
      }
      console.log(data)
    })
}

  estimation(){
    console.log(this.house);
    this.estimationservise.estimation(this.house).subscribe(data=>{
      console.log(data);
      this.resulat=new Map(Object.entries(data));
    } );
    this.show=true
    this.showb=false;
  }

}

