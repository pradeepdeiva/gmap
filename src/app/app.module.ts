import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule, } from 'primeng/card';  
import { HttpClientModule } from '@angular/common/http'
import { FormControl, FormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    HttpClientModule,FormsModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    FormControl
  ],
  exports: [ AppComponent ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
