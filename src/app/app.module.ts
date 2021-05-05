import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './Bank Repository/bank/bank.component';
import { BankoffreComponent } from './Bank Repository/bankoffre/bankoffre.component';
import { EstimationComponent } from './Estimation Repository/estimation/estimation.component';
import { HomeComponent } from './Template/home/home.component';
import { LoginComponent } from './login/login.component';
import { SimulationComponent } from './Simulation Repository/simulation/simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { ToastrModule } from 'ngx-toastr';
import { UnitpriceComponent } from './Estimation Repository/unitprice/unitprice.component';
import {FooterComponent} from './Template/footer/footer.component';
import { HeaderComponent } from './Template/header/header.component';
import { SimulationByBankComponent } from './Simulation Repository/simulation-by-bank/simulation-by-bank.component';
import { SimulationAllBankComponent } from './Simulation Repository/simulation-all-bank/simulation-all-bank.component';
import { ChartComponent } from './Simulation Repository/chart/chart.component';
import { BankDashComponent } from './Bank Repository/bank-dash/bank-dash.component';
import { BankUpateComponent } from './Bank Repository/bank-upate/bank-upate.component';
import { BankAddComponent } from './Bank Repository/bank-add/bank-add.component';
import { UnitPriceDashComponent } from './Estimation Repository/unit-price-dash/unit-price-dash.component';
import { AddOffreComponent } from './Bank Repository/add-offre/add-offre.component';
import { UpdateOffreComponent } from './Bank Repository/update-offre/update-offre.component';
import { UpdateUnitPriceComponent } from './Estimation Repository/update-unit-price/update-unit-price.component';


@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    BankoffreComponent,
    EstimationComponent,


    FooterComponent,
    HomeComponent,
    LoginComponent,
    SimulationComponent,


    UnitpriceComponent,
    HeaderComponent,
    SimulationByBankComponent,
    SimulationAllBankComponent,
    ChartComponent,
    BankDashComponent,
    BankUpateComponent,
    BankAddComponent,
    UnitPriceDashComponent,
    AddOffreComponent,
    UpdateOffreComponent,
    UpdateUnitPriceComponent
  ],
    imports: [
      ToastrModule,
      BrowserAnimationsModule, // required animations module
      ToastrModule.forRoot(),
      BrowserModule,
      AppRoutingModule,
      MatDialogModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
