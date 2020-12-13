import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';


const routes: Routes = [
  {
    path: 'generator',
    loadChildren: () => import('./modules/generator/generator.module').then(m => m.GeneratorModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule)
  },
  { path: '', redirectTo: 'generator', pathMatch: 'full' },
  { path: '404', component: Error404PageComponent },

  // otherwise redirect to 404
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
