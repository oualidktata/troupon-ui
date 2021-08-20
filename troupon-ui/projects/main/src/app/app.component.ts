import { Component, Input, OnInit } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://dev-193568.okta.com/oauth2/ausamxyd4gz50FYI4357',
  redirectUri: window.location.origin,
  clientId: '0oaa80ln6ceY5H5ey357',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Main app';
  showContactForm: boolean = true;
  /**
   *
   */
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login() {
    this.oauthService.initCodeFlow();
  }
  logout() {}
}
