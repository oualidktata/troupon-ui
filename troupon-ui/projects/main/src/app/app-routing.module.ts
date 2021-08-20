import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'app/home', component: HomeComponent },
  { path: 'app/dashboard', component: DashboardComponent },
  { path: 'app/contact-list', component: ContactListComponent },
  { path: 'app/add-contact', component: AddContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
