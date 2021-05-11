import { Component, OnInit } from '@angular/core';

import {EstimationServiceService} from '../../services/estimation-service.service';
import {Unitprice} from '../../shered/model/unitprice';
import {LoginComponent} from '../../Template/login/login.component';
import {MatDialog} from '@angular/material/dialog';
import {UnitpriceComponent} from '../unitprice/unitprice.component';
import {ToastrService} from 'ngx-toastr';
import {BankUpateComponent} from '../../Bank Repository/Bank Items/bank-upate/bank-upate.component';
import {UpdateUnitPriceComponent} from '../update-unit-price/update-unit-price.component';

@Component({
  selector: 'app-unit-price-dash',
  templateUrl: './unit-price-dash.component.html',
  styleUrls: ['./unit-price-dash.component.scss']
})
export class UnitPriceDashComponent implements OnInit {
 unitPrices: Unitprice[];
  unitPrice:Unitprice;
  constructor(private estimationService:EstimationServiceService,
              private readonly dialog: MatDialog,
              private toastr: ToastrService
) { }

  ngOnInit(): void {
   this.getAll();
  }
  getAll(){
    this.estimationService.getAll().subscribe((data: Unitprice[])=>{
      console.log(data);
      this.unitPrices = data;
    })
  }
  delete(unitPriceClk:Unitprice){
    this.estimationService.delete(unitPriceClk.id).subscribe();
   this.getAll();
    this.toastr.success('Unit Price  Deleted', 'notification');
  }
  openDialog() {
    const dialogRef = this.dialog.open(UnitpriceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAll();
    });
  }
  openDialogUpdate(unitPrice){

    const dialogRef = this.dialog.open(UpdateUnitPriceComponent,{
      data:unitPrice
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAll();
    });
  }

}
