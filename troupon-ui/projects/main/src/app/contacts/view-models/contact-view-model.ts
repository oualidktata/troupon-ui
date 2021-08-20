import { PhoneViewModel } from './phone-view-model';

export class ContactViewModel {
  /**
   *
   */
  constructor(
    public Name: string,
    public Country: string,
    public Email: string,
    public Phones: PhoneViewModel[]
  ) {}
}
