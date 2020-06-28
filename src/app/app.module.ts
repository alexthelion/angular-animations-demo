import {BrowserModule, HammerModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MDBBootstrapModulePro, MDBBootstrapModulesPro} from 'ng-uikit-pro-standard';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HammerModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
