import { Injectable } from '@angular/core';
import { PhoneViewModel } from '../view-models/phone-view-model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  firstPhone = new PhoneViewModel('+1', '514', '12125', 'canada');
  secondPhone = new PhoneViewModel('+2', '999', '55555');

  Tenant = 'arai';

  Contacts = [
    {
      Name: 'Oualid',
      Country: 'Canada',
      Email: 'whatever',
      Phones: [this.firstPhone, this.secondPhone],
    },
    {
      Name: 'Carl',
      Country: 'Canada',
      Email: 'asdas@gmail.com',
      Phones: [this.secondPhone],
    },
  ];
  Contact = {
    Name: 'Mr Bean!',
    Country: 'GB',
    Email: 'bean@gb.com',
    Phones: [this.firstPhone, this.secondPhone],
  };
}
