import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PtabComponent} from './product/ptab.component';
import {FormsModule} from '@angular/forms';
import {PformComponent} from "./product/pfrom.component";
@NgModule({
  declarations: [
    AppComponent,PtabComponent,PformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
