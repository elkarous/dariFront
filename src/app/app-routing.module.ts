import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BankoffreComponent} from './Bank Repository/bankoffre/bankoffre.component';
import {HomeComponent} from './Template/home/home.component';
import {SimulationComponent} from './Simulation Repository/simulation/simulation.component';
import {EstimationComponent} from './Estimation Repository/estimation/estimation.component';
import {BankComponent} from './Bank Repository/bank/bank.component';
import {UnitpriceComponent} from './Estimation Repository/unitprice/unitprice.component';
import {SimulationByBankComponent} from './Simulation Repository/simulation-by-bank/simulation-by-bank.component';
import {SimulationAllBankComponent} from './Simulation Repository/simulation-all-bank/simulation-all-bank.component';
import {ChartComponent} from './Simulation Repository/chart/chart.component';
import {UnitPriceDashComponent} from './Estimation Repository/unit-price-dash/unit-price-dash.component';
import {BankDashComponent} from './Bank Repository/bank-dash/bank-dash.component';

const routes: Routes = [
  { path: 'simulation', component: SimulationComponent },
  { path: 'simulationByBank', component: SimulationByBankComponent },
  { path: 'simulationAllBank', component: SimulationAllBankComponent },
  { path: 'estimation', component: EstimationComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'bank', component: BankComponent},
  { path: 'bankDash', component: BankDashComponent},
  { path: 'unitpriceDash', component: UnitPriceDashComponent},
  { path: 'unitprice', component: UnitpriceComponent},
  { path: 'bankOffre/:name/:id', component: BankoffreComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
