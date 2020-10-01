import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpaHostComponent } from './spa-host/spa-host.component';

@Injectable({ providedIn: 'root' })
export class SpaUnmountGuard implements CanDeactivate<SpaHostComponent> {
  canDeactivate(
    component: SpaHostComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const currentApp = component.appName;


    const nextApp = this.extractAppDataFromRouteTree(nextState.root);

    if (currentApp === nextApp) {
      return true;
    }

    if (!currentApp) {
      return true;
    }
    return component.unmount().pipe(map(_ => true));
  }

  private extractAppDataFromRouteTree(routeFragment: ActivatedRouteSnapshot): string {
    return location.pathname.split('/').filter(x => x.length)[0];
  }
}
