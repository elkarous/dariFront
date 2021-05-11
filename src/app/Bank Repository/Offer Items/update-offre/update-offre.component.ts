import {Component, Inject, OnInit} from '@angular/core';
import {BankOffres} from '../../../shered/model/bankOffres';
import {BankServiceService} from '../../../services/bank-service.service';
import {ToastrService} from 'ngx-toastr';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.scss']
})
export class UpdateOffreComponent implements OnInit {

  offre:BankOffres;
  constructor( private bankService:BankServiceService,
               private toastr: ToastrService,
               @Inject(MAT_DIALOG_DATA) public data: BankOffres) { }

  ngOnInit(): void {
    this.offre=this.data;
  }
  update(){
    this.bankService.updateOffer(this.offre).subscribe(data=>{
      this.offre=data;
    })
    this.toastr.success('Offre update', 'notification');
  }


}
