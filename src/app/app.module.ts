import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { BankoffreComponent } from './bankoffre/bankoffre.component';
import { EstimationComponent } from './estimation/estimation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SimulationComponent } from './simulation/simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { UnitpriceComponent } from './unitprice/unitprice.component';
import {FooterComponent} from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SimulationByBankComponent } from './simulation-by-bank/simulation-by-bank.component';
import { SimulationAllBankComponent } from './simulation-all-bank/simulation-all-bank.component';
import { ChartComponent } from './chart/chart.component';
import { BankDashComponent } from './bank-dash/bank-dash.component';
import { BankUpateComponent } from './bank-upate/bank-upate.component';
import { BankAddComponent } from './bank-add/bank-add.component';


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
    BankAddComponent
  ],
    imports: [
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
