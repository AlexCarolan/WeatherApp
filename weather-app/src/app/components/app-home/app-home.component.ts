import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent {

  public findLocation(location: string) {
    console.log("location", location);
  }

}
