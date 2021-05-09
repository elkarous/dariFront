import {Component, OnInit, ViewChild} from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {$} from 'protractor';


@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit {
  title = 'firstApp';
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  option={
    type:[],
    componentRestrictions:{country:'MX'}
  }
  lat ;
  long ;
  title_add;
  zoom;




  constructor() {

  }



  ngOnInit(): void {
this.setCurentLocation();

  }
  public handleAddressChange(address: Address) {
    console.log(address)
    console.log("Lat : "+ address.geometry.location.lat())
    console.log("Long : "+ address.geometry.location.lng())
    this.lat=address.geometry.location.lat();
    this.lat=address.geometry.location.lng()
  }
public setCurentLocation(){
    if('geolocation'in navigator){
      navigator.geolocation.getCurrentPosition(position =>{
      this.lat=position.coords.latitude;
      this.long=position.coords.latitude;
      this.zoom=15
    } )

    }
}
}
