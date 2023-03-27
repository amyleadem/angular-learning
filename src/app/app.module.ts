import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { UswdsBannerComponent } from './uswds-banner/uswds-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    UswdsBannerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
