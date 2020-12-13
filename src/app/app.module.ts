import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneratorPageComponent } from './pages/generator-page/generator-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { PaymentsPageComponent } from './pages/payments-page/payments-page.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GeneratorPageComponent,
    Error404PageComponent,
    PaymentsPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
