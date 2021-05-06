import { Component, OnInit } from '@angular/core';
import {Bank} from '../../shered/model/bank';
import {BankServiceService} from '../../services/bank-service.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.scss']
})
export class BankAddComponent implements OnInit {
bank:Bank;
  constructor( private bankService :BankServiceService,
  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bank=new Bank();
  }
add(){
    this.bankService.create(this.bank).subscribe(data=>{
      this.bank=data;
    })
  this.toastr.success('Bank Added', 'notification');
}
}
