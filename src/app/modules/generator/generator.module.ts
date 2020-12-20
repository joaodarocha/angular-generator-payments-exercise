import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { GeneratorPageComponent } from './pages/generator-page/generator-page.component';
import { GeneratorRoutingModule } from './generator-routing.module';
import { GeneratorHeaderComponent } from './components/generator-header/generator-header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GeneratorRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GeneratorPageComponent,
    GeneratorHeaderComponent
  ],
})
export class GeneratorModule {
}
