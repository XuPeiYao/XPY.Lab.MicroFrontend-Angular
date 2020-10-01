import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaHostRoutingModule } from './spa-host-routing.module';
import { SpaHostComponent } from './spa-host/spa-host.component';


@NgModule({
  declarations: [SpaHostComponent],
  imports: [
    CommonModule,
    SpaHostRoutingModule
  ]
})
export class SpaHostModule { }
