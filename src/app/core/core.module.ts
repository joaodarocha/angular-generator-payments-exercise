import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CodeService } from './services/code.service';
import { GridService } from './services/grid.service';
import { NumbersService } from './services/numbers.service';
import { PaymentsService } from './services/payments.service';
import { ClockService } from './services/clock.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    CodeService,
    GridService,
    NumbersService,
    PaymentsService,
    ClockService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
