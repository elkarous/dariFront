import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { BankoffreComponent } from './bankoffre/bankoffre.component';
import { EstimationComponent } from './estimation/estimation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SimulationComponent } from './simulation/simulation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProjectsComponent } from './projects/projects.component';
import { UnitpriceComponent } from './unitprice/unitprice.component';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    BankoffreComponent,
    EstimationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SimulationComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    PricingComponent,
    ProjectsComponent,
    UnitpriceComponent
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
