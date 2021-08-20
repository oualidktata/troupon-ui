import { Injectable } from '@angular/core';
import { environment } from './environment';
import { IEnvironment } from './ienvironment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements IEnvironment {
  /**
   *
   */
  constructor() {}
  get production() {
    return environment.production;
  }
  get dealsBaseUri() {
    return environment.dealsBaseUri;
  }
  get contactsBaseUri() {
    return environment.contactsBaseUri;
  }
}
