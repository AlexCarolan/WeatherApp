import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { WeatherDisplayComponent } from './components/weather/weather-display/weather-display.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherDayComponent } from './components/weather/weather-day/weather-day.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    HeaderComponent,
    WeatherDisplayComponent,
    SearchComponent,
    WeatherDayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
