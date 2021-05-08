import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from '@fl-test/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
