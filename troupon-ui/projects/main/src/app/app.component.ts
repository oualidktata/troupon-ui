import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://dev-193568.okta.com/oauth2/ausamxyd4gz50FYI4357',
  redirectUri: window.location.origin,
  clientId: '0oaa80ln6ceY5H5ey357',
};

@Component({
  selector: 'add-contact',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Add Contact';

  contactForm: FormGroup = new FormGroup({});

  /**
   *
   */
  constructor(private fb: FormBuilder, private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      email: '',
      phones: this.fb.array([]),
    });
    this.contactForm.valueChanges.subscribe(console.log);
  }

  get phones() {
    return this.contactForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.phones.push(phone);
  }
  deletePhone(index: number) {
    this.phones.removeAt(index);
  }

  login() {
    this.oauthService.initCodeFlow();
  }
  logout() {}
}
