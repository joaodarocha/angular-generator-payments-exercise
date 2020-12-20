import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PaymentsRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [
    PaymentsPageComponent
  ],
})
export class PaymentsModule {
}
