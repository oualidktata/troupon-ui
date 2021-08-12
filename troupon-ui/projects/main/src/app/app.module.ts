import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  OAuthModule,
  OAuthService,
  UrlHelperService,
  OAuthLogger,
} from 'angular-oauth2-oidc';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [OAuthService, UrlHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
