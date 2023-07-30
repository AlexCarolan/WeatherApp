import { Component } from '@angular/core';
import { Forcast } from 'src/app/interfaces/forcast';
import { Locations } from 'src/app/interfaces/locations';
import { WeatherService } from 'src/app/services/weather-service/weather-service.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent {

  public location: Locations | null = null;
  public forcast: Forcast[] | null = null;
  public error: boolean = false;

  constructor(
    private weatherService: WeatherService
  ) {
  }

  public findLocation(location: string) {
    this.weatherService.getForcast(location, 7).subscribe({
      next: (data) => {
        console.log(data);
        this.error = false;
        this.location = data.location;
        this.forcast = data.forecast.forecastday;
      },
      error: () => {
        this.error = true;
        this.location = null;
        this.forcast = null;
      }
    });
  }

}
