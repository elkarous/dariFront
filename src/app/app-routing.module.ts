import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BankoffreComponent} from './Bank Repository/Offer Items/bankoffre/bankoffre.component';
import {HomeComponent} from './Template/home/home.component';
import {SimulationComponent} from './Simulation Repository/simulation/simulation.component';
import {EstimationComponent} from './Estimation Repository/estimation/estimation.component';
import {BankComponent} from './Bank Repository/Bank Items/bank/bank.component';

import {SimulationByBankComponent} from './Simulation Repository/simulation-by-bank/simulation-by-bank.component';
import {SimulationAllBankComponent} from './Simulation Repository/simulation-all-bank/simulation-all-bank.component';
import {UnitPriceDashComponent} from './Estimation Repository/unit-price-dash/unit-price-dash.component';
import {BankDashComponent} from './Bank Repository/Bank Items/bank-dash/bank-dash.component';
import {LoginComponent} from './Template/login/login.component';
import {DashboardComponent} from './Dashboard Repository/dashboard/dashboard.component';
import {DashHomeComponent} from './Dashboard Repository/dash-home/dash-home.component';
import {PageNotFoundComponent} from './Template/page-not-found/page-not-found.component';
import {AuthGuard} from './shered/guards/auth.guard';
import {OurServiceComponent} from './Template/our-service/our-service.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: "login", component: LoginComponent },
  { path: 'home', component: HomeComponent ,children:[
      {path: "service" ,component: OurServiceComponent,children:[
      { path: 'simulation', component: SimulationComponent },
      { path: 'simulationByBank', component: SimulationByBankComponent },
      { path: 'simulationAllBank', component: SimulationAllBankComponent },
      { path: 'estimation', component: EstimationComponent},
      { path: 'bank', component: BankComponent}
      ]},
    ]},

  { path: "dashboard",component:DashboardComponent , canActivate: [AuthGuard],children:[
      { path: 'home', component: DashHomeComponent },
      { path: 'bankOffre/:name/:id', component: BankoffreComponent},
      { path: 'bankDash', component: BankDashComponent,
      },
      { path: 'unitPriceDash', component: UnitPriceDashComponent},

    ]},
  {path: 'NotFound', component: PageNotFoundComponent},

  {path: '**', redirectTo:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
