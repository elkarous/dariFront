import { Component, OnInit } from '@angular/core';
import {Bank} from '../../../shered/model/bank';
import {BankServiceService} from '../../../services/bank-service.service';
import {ToastrService} from 'ngx-toastr';
import {HttpEventType, HttpResponse} from '@angular/common/http';
@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.scss']
})
export class BankAddComponent implements OnInit {
  file:File
bank:Bank;
image = new FileReader();
form =new FormData()
  private url: string | ArrayBuffer;
  constructor( private bankService :BankServiceService,
  private toastr: ToastrService) { }

  ngOnInit(): void {
    this.bank=new Bank();

  }
  upload(file:File): void {





        this.bankService.upload(file);
        console.log("ok")
      }






add(){
    this.bankService.create(this.bank).subscribe(data=>{
      this.bank=data;
    })
  this.toastr.success('Bank Added', 'notification');
}
  onSelectFile(event) {
    const file = event.target.files.item(0);

    this.form.append('bank',JSON.stringify(this.bank))

    this.form.append('image', file)

  }

}
