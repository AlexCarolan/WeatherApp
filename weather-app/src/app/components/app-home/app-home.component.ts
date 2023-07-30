import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api-service.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent {

  constructor(private apiService: ApiService) {}

  public employeeId: string = '';

  public getData(): void {
    console.log(this.employeeId);
    this.apiService.getAuth().subscribe((data) => {
      console.log("auth", data);
    });
  }

}
