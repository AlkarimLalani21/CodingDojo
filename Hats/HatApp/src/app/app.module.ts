import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HatComponent } from './hat/hat.component';
import { HatCarouselComponent } from './hat-carousel/hat-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HatComponent,
    HatCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
