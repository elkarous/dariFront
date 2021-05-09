import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './Bank Repository/bank/bank.component';
import { BankoffreComponent } from './Bank Repository/bankoffre/bankoffre.component';
import { EstimationComponent } from './Estimation Repository/estimation/estimation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SimulationComponent } from './Simulation Repository/simulation/simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import { ToastrModule } from 'ngx-toastr';
import { UnitpriceComponent } from './Estimation Repository/unitprice/unitprice.component';
import {FooterComponent} from './Template/footer/footer.component';
import { HeaderComponent } from './Template/header/header.component';
import { SimulationByBankComponent } from './Simulation Repository/simulation-by-bank/simulation-by-bank.component';
import { SimulationAllBankComponent } from './Simulation Repository/simulation-all-bank/simulation-all-bank.component';

import { BankDashComponent } from './Bank Repository/bank-dash/bank-dash.component';
import { BankUpateComponent } from './Bank Repository/bank-upate/bank-upate.component';
import { BankAddComponent } from './Bank Repository/bank-add/bank-add.component';
import { UnitPriceDashComponent } from './Estimation Repository/unit-price-dash/unit-price-dash.component';
import { AddOffreComponent } from './Bank Repository/add-offre/add-offre.component';
import { UpdateOffreComponent } from './Bank Repository/update-offre/update-offre.component';
import { UpdateUnitPriceComponent } from './Estimation Repository/update-unit-price/update-unit-price.component';
import { CarouselComponent } from './Template/carousel/carousel.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {AgmCoreModule} from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { ChartResultComponent } from './Simulation Repository/chart-result/chart-result.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {JwtInterceptor} from './services/jwt.interceptor'
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
    BankDashComponent,
    BankUpateComponent,
    BankAddComponent,
    UnitPriceDashComponent,
    AddOffreComponent,
    UpdateOffreComponent,
    UpdateUnitPriceComponent,
    CarouselComponent,
    NavComponent,
    ChartResultComponent,
    DashboardComponent
  ],
    imports: [
      MatGoogleMapsAutocompleteModule,
      GooglePlaceModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDv5u_OALswypmlrUjYjbVveEVxrojt7EE',
        libraries: ['places']
      }),

      ToastrModule,
      BrowserAnimationsModule, // required animations module
      ToastrModule.forRoot(),
      BrowserModule,
      AppRoutingModule,
      MatDialogModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      FontAwesomeModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
