import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorPageComponent } from './pages/generator-page/generator-page.component';


const generatorRoutes: Routes = [
  { path: '', component: GeneratorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(generatorRoutes)],
  exports: [RouterModule]
})
export class GeneratorRoutingModule {
}
