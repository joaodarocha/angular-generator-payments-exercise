import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorPageComponent } from './pages/generator-page/generator-page.component';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';


const routes: Routes = [
  { path: 'generator', component: GeneratorPageComponent, pathMatch: 'full' },
  { path: 'payments', component: PaymentsPageComponent, pathMatch: 'full' },
  { path: '404', component: Error404PageComponent },

  // otherwise redirect to 404
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
