import { Component, Input } from '@angular/core';
import { Forcast } from 'src/app/interfaces/forcast';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent {

  @Input() public forcast: Forcast[] = [];

}
