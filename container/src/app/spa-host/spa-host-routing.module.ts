import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaHostComponent } from './spa-host/spa-host.component';
import { SpaUnmountGuard } from './spa-unmount.guard';

const routes: Routes = [{
  path: '**',
  canDeactivate: [SpaUnmountGuard],
  component: SpaHostComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaHostRoutingModule { }
