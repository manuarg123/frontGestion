import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { NextConsultationsWidgetComponent } from './components/consultation/next-consultations-widget/next-consultations-widget.component';
import { NextConsultationWidgetComponent } from './components/consultation/next-consultation-widget/next-consultation-widget.component';
import { LastConsultationsWidgetComponent } from './components/consultation/last-consultations-widget/last-consultations-widget.component';
import { PendingPayoutsWidgetComponent } from './components/payout/pending-payouts-widget/pending-payouts-widget.component';
import { CompletePayoutsWidgetComponent } from './components/payout/complete-payouts-widget/complete-payouts-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    NavbarComponent,
    ContactosComponent,
    NextConsultationsWidgetComponent,
    NextConsultationWidgetComponent,
    LastConsultationsWidgetComponent,
    PendingPayoutsWidgetComponent,
    CompletePayoutsWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
