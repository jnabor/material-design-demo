import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdMenuModule, MdIconModule, MdTooltipModule } from '@angular/material';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdButtonModule,
    MdMenuModule,
    MdIconModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
