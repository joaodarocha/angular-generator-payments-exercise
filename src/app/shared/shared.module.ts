import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LiveCodeComponent } from './components/live-code/live-code.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    LiveCodeComponent
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    LiveCodeComponent
  ]
})
export class SharedModule {
}
