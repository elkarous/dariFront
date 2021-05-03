import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BankoffreComponent} from './bankoffre/bankoffre.component';
import {HomeComponent} from './home/home.component';
import {SimulationComponent} from './simulation/simulation.component';
import {EstimationComponent} from './estimation/estimation.component';
import {BankComponent} from './bank/bank.component';
import {UnitpriceComponent} from './unitprice/unitprice.component';
import {SimulationByBankComponent} from './simulation-by-bank/simulation-by-bank.component';
import {SimulationAllBankComponent} from './simulation-all-bank/simulation-all-bank.component';
import {ChartComponent} from './chart/chart.component';

const routes: Routes = [
  { path: 'simulation', component: SimulationComponent },
  { path: 'simulationByBank', component: SimulationByBankComponent },
  { path: 'simulationAllBank', component: SimulationAllBankComponent },
  { path: 'estimation', component: EstimationComponent},
  { path: 'chart', component: ChartComponent},
  { path: 'bank', component: BankComponent},
  { path: 'unitprice', component: UnitpriceComponent},
  { path: 'bankOffre', component: BankoffreComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
