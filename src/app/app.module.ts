
import { HomePageComponent } from './home-page/home-page.component';
import { JoinNowComponent } from './join-now/join-now.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';








const providers = []



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    JoinNowComponent,
 

 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    DefaultModule,
    HttpClientModule, 
    ReactiveFormsModule,
    BackButtonDisableModule.forRoot(),
    

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
