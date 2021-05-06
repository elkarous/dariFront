import {Component, Inject, OnInit} from '@angular/core';
import {BankServiceService} from '../../services/bank-service.service';
import {BankOffres} from '../../shered/model/bankOffres';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Bank} from '../../shered/model/bank';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.scss']
})
export class AddOffreComponent implements OnInit {
offre:BankOffres;
  constructor( private bankService:BankServiceService,
               private toastr: ToastrService,
               @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {
    this.offre=new BankOffres();
  }
  add(){
    this.bankService.createOffer(this.offre,this.data).subscribe(data=>{
      this.offre=data;
    })
    this.toastr.success('Offre Added', 'notification');
  }
}
