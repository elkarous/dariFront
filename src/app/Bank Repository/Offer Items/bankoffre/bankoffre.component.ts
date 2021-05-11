import { Component, Input, OnInit } from '@angular/core';
import { Bank } from '../../../shered/model/bank';
import { BankOffres } from '../../../shered/model/bankOffres';
import { BankServiceService } from '../../../services/bank-service.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {BankAddComponent} from '../../Bank Items/bank-add/bank-add.component';
import {MatDialog} from '@angular/material/dialog';
import {AddOffreComponent} from '../add-offre/add-offre.component';
import {UpdateOffreComponent} from '../update-offre/update-offre.component';

@Component({
  selector: 'app-bankoffre',
  templateUrl: './bankoffre.component.html',
  styleUrls: ['./bankoffre.component.scss']
})
export class BankoffreComponent implements OnInit {


 offres: BankOffres[];
name:any
param=this.route.snapshot.paramMap.get("id") ;
id: number = +this.param;

  constructor(private bankservice:BankServiceService,
              private readonly dialog: MatDialog,
              private toastr: ToastrService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get("name");
this.name=this.route.snapshot.paramMap.get("name") ;

    this.getOffer();
  }
getOffer(){
  this.bankservice.getBankOffreByName(this.route.snapshot.paramMap.get("name")).subscribe((data: BankOffres[])=>{
      console.log(data);
      this.offres= data;
    }
  )
}
delete(offre:BankOffres) {
  this.bankservice.deleteOffer(this.id, offre.idBankOffer).subscribe();
  this.toastr.success('Offer Deleted', 'notification');
  this.getOffer();
}
  openDialog( ) {
    const dialogRef = this.dialog.open(AddOffreComponent,{
      height:"500px",
      width:"700px",
      data:this.id
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getOffer();
    });

  }
  openDialogUpdate(offer:BankOffres ) {
    const dialogRef = this.dialog.open(UpdateOffreComponent,{
      height:"500px",
      width:"700px",
      data:offer
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getOffer();
    });

  }
}

