import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    Error404PageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
