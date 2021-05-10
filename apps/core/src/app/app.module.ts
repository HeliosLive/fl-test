import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule, IconModule, LabelModule } from '@fl-test/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    IconModule,
    LabelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
