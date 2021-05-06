import {Component, Inject, OnInit} from '@angular/core';
import {BankServiceService} from '../../services/bank-service.service';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BankOffres} from '../../shered/model/bankOffres';
import {Unitprice} from '../../shered/model/unitprice';
import {EstimationServiceService} from '../../services/estimation-service.service';

@Component({
  selector: 'app-update-unit-price',
  templateUrl: './update-unit-price.component.html',
  styleUrls: ['./update-unit-price.component.scss']
})
export class UpdateUnitPriceComponent implements OnInit {
unitprice:Unitprice;
  constructor( private estimationService:EstimationServiceService,
               private toastr: ToastrService,
               @Inject(MAT_DIALOG_DATA) public data: Unitprice) { }

  ngOnInit(): void {
    this.unitprice=this.data;
  }
  update(){
    this.estimationService.update(this.unitprice).subscribe(data=>{
      this.unitprice=data;
    })
    this.toastr.success('unit Price update', 'notification');
  }


}
