import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';


const paymentsRoutes: Routes = [
  { path: '', component: PaymentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(paymentsRoutes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {
}
