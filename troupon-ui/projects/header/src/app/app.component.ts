import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'header';
}
