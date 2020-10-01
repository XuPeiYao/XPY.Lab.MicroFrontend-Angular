import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'xpp-child1-empty-route',
  template: 'ngRoute',
})
export class EmptyRouteComponent {
  constructor(private http: HttpClient) {
    http.get('assets/test.json').subscribe(console.log);
  }
}
