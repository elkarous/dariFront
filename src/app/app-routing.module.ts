import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BankoffreComponent} from './bankoffre/bankoffre.component';
import {HomeComponent} from './home/home.component';
import {SimulationComponent} from './simulation/simulation.component';
import {EstimationComponent} from './estimation/estimation.component';
import {BankComponent} from './bank/bank.component';
import {PricingComponent} from './pricing/pricing.component';
import {ProjectsComponent} from './projects/projects.component';
import {ServiceComponent} from './service/service.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {UnitpriceComponent} from './unitprice/unitprice.component';

const routes: Routes = [
  { path: 'simulation', component: SimulationComponent },
  { path: 'estimation', component: EstimationComponent},
  { path: 'bank', component: BankComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'unitprice', component: UnitpriceComponent},
  { path: 'bankOffre', component: BankoffreComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
