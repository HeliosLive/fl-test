import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule, IconModule } from '@fl-test/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, BrowserAnimationsModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
