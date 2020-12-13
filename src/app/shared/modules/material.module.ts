import { MatGridListModule } from '@angular/material/grid-list';

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  exports: [
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ]
})

export class MaterialModule {
}
