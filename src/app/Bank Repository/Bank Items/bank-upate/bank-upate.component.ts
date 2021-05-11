import {Component, Inject, Input, OnInit} from '@angular/core';
import {Bank} from '../../../shered/model/bank';
import {BankServiceService} from '../../../services/bank-service.service';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-bank-upate',
  templateUrl: './bank-upate.component.html',
  styleUrls: ['./bank-upate.component.scss']
})
export class BankUpateComponent implements OnInit {

 bank:Bank;
  constructor( @Inject(MAT_DIALOG_DATA) public data: Bank,
               private bankService :BankServiceService,
               private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bank=this.data;
  }
  update(){
    this.bankService.update(this.bank).subscribe(data=>{
      this.bank=data;
    })
    this.toastr.success('Bank Updated', 'notification');
  }

}
