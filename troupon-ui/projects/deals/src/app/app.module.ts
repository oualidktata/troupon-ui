import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddDealDialogComponent } from './add-deal-dialog/add-deal-dialog.component';

@NgModule({
  declarations: [AppComponent, AddDealDialogComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent],
})
export class AppModule {
  /**
   *
   */
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const headerApp = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('deals-app', headerApp);
  }
}
