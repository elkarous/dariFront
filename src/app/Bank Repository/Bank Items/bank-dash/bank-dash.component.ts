import { Component, OnInit } from '@angular/core';
import {Bank} from '../../../shered/model/bank';
import {BankOffres} from '../../../shered/model/bankOffres';
import {BankServiceService} from '../../../services/bank-service.service';
import {LoginComponent} from '../../../Template/login/login.component';
import {BankAddComponent} from '../bank-add/bank-add.component';
import {MatDialog} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {BankUpateComponent} from '../bank-upate/bank-upate.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bank-dash',
  templateUrl: './bank-dash.component.html',
  styleUrls: ['./bank-dash.component.scss']
})
export class BankDashComponent implements OnInit {
  banktr:Bank;
  banks: Bank[] ;
  name: string;
  offres:BankOffres[];

  constructor(private bankservice:BankServiceService,
              private router:Router,
              private readonly dialog: MatDialog,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
    this.banktr =new Bank();

  }
  getAll(){
    this.bankservice.getAll().subscribe((data: Bank[])=>{
        console.log(data);
        this.banks = data;
      }
    )
  }
  delete(bank){

    this.bankservice.delete(bank.id).subscribe(date=>{
        this.toastr.success('Bank Deleted', 'notification',{
          timeOut: 3000,
          positionClass: 'toast-bottom-left'
        });
    },
    err=>this.toastr.error(
      `Erreur`,
      'can not delete!',
      {
        timeOut: 3000,
        positionClass: 'toast-bottom-left'
      }));
    this.bankservice.getAll().subscribe()


  }
  getOffres(bankcli:Bank){
    this.router.navigate(["/dashboard/bankOffre",bankcli.name,bankcli.id])

  }
  openDialog() {
    const dialogRef = this.dialog.open(BankAddComponent,{
      height:"500px",
      width:"700px",

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAll();
    });

  }
  openDialogUpdate(bank){

    const dialogRef = this.dialog.open(BankUpateComponent,{
      height:"500px",
      width:"700px",
      data:bank
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAll();
    });
  }
}
