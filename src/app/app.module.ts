//this is main ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatSliderModule } from '@angular/material/slider';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LogInComponent } from './log-in/log-in.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './log-in/log-in.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ //list of component
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    ContactFormComponent,
    LogInComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    FormsModule, //for ngModel
    AppRoutingModule,
    HttpClientModule,
    // MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,

    //The HttpClientInMemoryWebApi Module module intercept HTTP request
    //and return simulated server responses.
    //remove it when a real server is ready to receive requests.

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    ),

    BrowserAnimationsModule
  ],
  entryComponents: [
    DialogContentExampleDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
