import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LiveCodeComponent } from './components/live-code/live-code.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    LiveCodeComponent,
    HeaderComponent
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    LiveCodeComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}
