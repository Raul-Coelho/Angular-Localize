import { LocalizeService } from './services/localize.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import '@angular/common/locales/global/pt';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      deps: [LocalizeService],
      useFactory: (localizeService) => localizeService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
