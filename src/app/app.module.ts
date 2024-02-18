import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AssetsInterceptor } from './assets.interceptor';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { GameComponent } from './modules/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AssetsInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
