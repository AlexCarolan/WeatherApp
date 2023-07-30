import { Component, Input } from '@angular/core';
import { Forcast } from 'src/app/interfaces/forcast';

@Component({
  selector: 'app-weather-day',
  templateUrl: './weather-day.component.html',
  styleUrls: ['./weather-day.component.scss']
})
export class WeatherDayComponent {
  @Input() dayForcast: Forcast| null = null;
}
