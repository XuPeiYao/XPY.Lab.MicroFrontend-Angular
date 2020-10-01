import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleSpaService } from '../../services/single-spa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'xpy-container-spa-host',
  template: '<div #appContainer></div>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaHostComponent implements OnInit {

  constructor(private singleSpaService: SingleSpaService, private route: ActivatedRoute) { }

  @ViewChild('appContainer', { static: true })
  appContainerRef: ElementRef;

  appName: string;

  ngOnInit() {
    this.appName = location.pathname.split('/').filter(x => x.length)[0];
    if (!this.appName) return;
    this.mount().subscribe();
  }

  mount(): Observable<unknown> {
    if (!this.appName) return;
    return this.singleSpaService.mount(this.appName, this.appContainerRef.nativeElement);
  }

  unmount(): Observable<unknown> {
    if (!this.appName) return;
    return this.singleSpaService.unmount(this.appName);
  }
}
