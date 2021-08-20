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
import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from '../shared/mat.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DealCardViewComponent } from './common/deal-card-view/deal-card-view.component';
import { EditDealDialogComponent } from './deals/edit-deal-dialog/edit-deal-dialog.component';
import { ContactsService } from './contacts/services/contacts.service';
import { DealsService } from './services/deals-service/deals-service.service';
@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    DashboardComponent,
    ContactListComponent,
    HomeComponent,
    DealCardViewComponent,
    EditDealDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OAuthModule.forRoot(),
    MatModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [OAuthService, UrlHelperService, ContactsService, DealsService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
