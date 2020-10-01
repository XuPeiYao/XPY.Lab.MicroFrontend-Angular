import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ChangeRequestHostInterceptor } from '../single-spa/changeRequestHostInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ChangeRequestHostInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
