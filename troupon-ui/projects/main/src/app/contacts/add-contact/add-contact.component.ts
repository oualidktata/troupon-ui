import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { ContactViewModel } from '../view-models/contact-view-model';
import { PhoneViewModel } from '../view-models/phone-view-model';
import { ContactsService } from '../services/contacts.service';

export const authConfig: AuthConfig = {
  issuer: 'https://dev-193568.okta.com/oauth2/ausamxyd4gz50FYI4357',
  redirectUri: window.location.origin,
  clientId: '0oaa80ln6ceY5H5ey357',
};

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  title = 'Add Contact';
  @Input() tenant!: string;
  @Input() contact!: ContactViewModel;
  contactForm: FormGroup = new FormGroup({});

  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    private oauthService: OAuthService,
    private contactService: ContactsService
  ) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.contact = contactService.Contact;
  }
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: [this.contact.Name, Validators.required],
      email: [
        this.contact.Email,
        Validators.compose([Validators.required, Validators.email]),
      ],
      phoneForms: this.fb.array([]),
    });
    this.contact.Phones.forEach((ph) =>
      this.phoneForms.push(this.initPhone(ph))
    );

    this.contactForm.valueChanges.subscribe(console.log);
  }

  get phoneForms() {
    return this.contactForm.get('phoneForms') as FormArray;
  }
  addPhone() {
    const phoneGroup = this.fb.group({
      area: ['', Validators.required],
      prefix: ['', Validators.required],
      line: [
        '',
        [Validators.required, Validators.maxLength(4), Validators.minLength(4)],
      ],
      country: ['usa'],
    });
    this.phoneForms.push(phoneGroup);
  }
  initPhone(phone: PhoneViewModel) {
    return this.fb.group({
      area: [phone?.Area, Validators.required],
      prefix: [phone?.Prefix, Validators.required],
      line: [
        phone.Line,
        [Validators.required, Validators.maxLength(4), Validators.minLength(4)],
      ],
      country: [phone?.Country],
    });
  }
  deletePhone(index: number) {
    this.phoneForms.removeAt(index);
  }
  get email() {
    return this.contactForm.get('email');
  }

  clearPhones() {
    this.phoneForms.clear();
  }

  getValidity(i: number, field: string) {
    let control = this.phoneForms.controls[i].get(field);
    return control?.valid && control?.touched;
  }

  login() {
    this.oauthService.initCodeFlow();
  }
  logout() {}
}
