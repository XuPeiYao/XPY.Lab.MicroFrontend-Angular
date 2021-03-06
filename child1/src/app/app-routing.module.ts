import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { prop } from 'src/main.single-spa';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [{
  path: 'ngRoute',
  component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF, useFactory: () => {
      console.log(prop.basehref);
      return prop.basehref;
    }
  }]
})
export class AppRoutingModule { }
