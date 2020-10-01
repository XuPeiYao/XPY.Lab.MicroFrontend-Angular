import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mountRootParcel, Parcel, ParcelConfig } from 'single-spa';
import { tap } from 'rxjs/operators';
import importMap from '../../assets/import-map.json';
declare var System;

@Injectable({
  providedIn: 'root'
})
export class SingleSpaService {

  private loadedParcels: {
    [appName: string]: Parcel;
  } = {};

  mount(appName: string, domElement: HTMLElement): Observable<unknown> {
    return from(System.import(appName)).pipe(
      tap((app: ParcelConfig) => {
        var url = importMap.imports[appName];
        var pathArray = url.split('/');
        var protocol = pathArray[0];
        var host = pathArray[2];
        var origin = protocol + '//' + host;

        this.loadedParcels[appName] = mountRootParcel(app, {
          appName,
          origin,
          basehref: '/' + appName,
          domElement
        });
      })
    );
  }

  unmount(appName: string): Observable<unknown> {
    return from(this.loadedParcels[appName].unmount()).pipe(
      tap(() => delete this.loadedParcels[appName])
    );
  }
}
