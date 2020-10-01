import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mountRootParcel, Parcel, ParcelConfig } from 'single-spa';
import { tap } from 'rxjs/operators';

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
        this.loadedParcels[appName] = mountRootParcel(app, {
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
