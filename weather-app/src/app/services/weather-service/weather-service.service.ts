import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = "http://api.weatherapi.com/v1";
  private apiKey: string = "154584fae8be4d31ae5161237233007";

  constructor(private http: HttpClient) { }

  public getForcast(location: string, days: number): Observable<any> {
    return this.http
      .post<any>(
        this.baseUrl + '/forecast.json?key=' + this.apiKey
        + '&q=' + location + '&days=' + days + '&aqi=no&alerts=no', {}
      )
  }

}
