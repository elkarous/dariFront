import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import { BankoffreComponent } from './Bank Repository/Offer Items/bankoffre/bankoffre.component';
import { EstimationComponent } from './Estimation Repository/estimation/estimation.component';
import { HomeComponent } from './Template/home/home.component';
import { LoginComponent } from './Template/login/login.component';
import { SimulationComponent } from './Simulation Repository/simulation/simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// MDB Angular Pro
import { WavesModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatStepperModule} from '@angular/material/stepper';
import { ToastrModule } from 'ngx-toastr';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UnitpriceComponent } from './Estimation Repository/unitprice/unitprice.component';
import {FooterComponent} from './Template/footer/footer.component';
import { HeaderComponent } from './Template/header/header.component';
import { SimulationByBankComponent } from './Simulation Repository/simulation-by-bank/simulation-by-bank.component';
import { SimulationAllBankComponent } from './Simulation Repository/simulation-all-bank/simulation-all-bank.component';
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { BankDashComponent } from './Bank Repository/Bank Items/bank-dash/bank-dash.component';
import { BankUpateComponent } from './Bank Repository/Bank Items/bank-upate/bank-upate.component';
import { BankAddComponent } from './Bank Repository/Bank Items/bank-add/bank-add.component';
import { UnitPriceDashComponent } from './Estimation Repository/unit-price-dash/unit-price-dash.component';
import { AddOffreComponent } from './Bank Repository/Offer Items/add-offre/add-offre.component';
import { UpdateOffreComponent } from './Bank Repository/Offer Items/update-offre/update-offre.component';
import { UpdateUnitPriceComponent } from './Estimation Repository/update-unit-price/update-unit-price.component';
import { CarouselComponent } from './Template/carousel/carousel.component';
import { MorrisJsModule } from 'angular-morris-js';
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
import {MatTabsModule} from '@angular/material/tabs';

import { DashboardComponent } from './Dashboard Repository/dashboard/dashboard.component';
import {JwtInterceptor} from './services/jwt.interceptor';
import { DashHomeComponent } from './Dashboard Repository/dash-home/dash-home.component';
import { PageNotFoundComponent } from './Template/page-not-found/page-not-found.component'
import {MatSliderModule} from '@angular/material/slider';
import { OurServiceComponent } from './Template/our-service/our-service.component';
import {ListFilterPipe} from './shered/pipe';
import { MdbModule } from 'mdb-angular-ui-kit';
import { MapsComponent } from './maps/maps.component';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [
    AppComponent,
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

    DashboardComponent,
    DashHomeComponent,
    PageNotFoundComponent,
    OurServiceComponent,
    ListFilterPipe,
    MapsComponent,
    UploadComponent
  ],
    imports: [

      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDv5u_OALswypmlrUjYjbVveEVxrojt7EE',
        libraries: ['places'],

      }),
      MorrisJsModule,
      MatSliderModule,
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

      LayoutModule,
      MatTabsModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatMenuModule,
      MatStepperModule,
      MatFormFieldModule,
      MatTableModule,
      NgbTooltipModule,
      MdbModule,
      WavesModule,
      MDBBootstrapModule.forRoot(),
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
