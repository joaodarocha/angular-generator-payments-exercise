import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { PaymentsRoutingModule } from './payments-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PaymentsRoutingModule
  ],
  declarations: [
    PaymentsPageComponent
  ],
})
export class PaymentsModule {
}
