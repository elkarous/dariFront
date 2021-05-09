import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BankoffreComponent} from './Bank Repository/bankoffre/bankoffre.component';
import {HomeComponent} from './home/home.component';
import {SimulationComponent} from './Simulation Repository/simulation/simulation.component';
import {EstimationComponent} from './Estimation Repository/estimation/estimation.component';
import {BankComponent} from './Bank Repository/bank/bank.component';
import {UnitpriceComponent} from './Estimation Repository/unitprice/unitprice.component';
import {SimulationByBankComponent} from './Simulation Repository/simulation-by-bank/simulation-by-bank.component';
import {SimulationAllBankComponent} from './Simulation Repository/simulation-all-bank/simulation-all-bank.component';
import {UnitPriceDashComponent} from './Estimation Repository/unit-price-dash/unit-price-dash.component';
import {BankDashComponent} from './Bank Repository/bank-dash/bank-dash.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AfterAuthGuard} from './guards/after-auth.guard';
import {HeaderComponent} from './Template/header/header.component';
import {DashHomeComponent} from './dash-home/dash-home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: 'unitprice', component: UnitpriceComponent},
  { path: 'home', component: HomeComponent ,children:[
      { path: 'simulation', component: SimulationComponent },
      { path: 'simulationByBank', component: SimulationByBankComponent },
      { path: 'simulationAllBank', component: SimulationAllBankComponent },
      { path: 'estimation', component: EstimationComponent},
      { path: 'bank', component: BankComponent},
    ]},

  { path: "dashboard",component:DashboardComponent ,children:[
      { path: 'home', component: DashHomeComponent },
      { path: 'bankDash', component: BankDashComponent,children:[
          { path: 'bankOffre/:name/:id', component: BankoffreComponent}
        ]
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
