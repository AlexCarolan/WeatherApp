import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private apiUrl: string = "https://example-be.com/";

  constructor(private http: HttpClient) { }

  public getAuth(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl + 'generate/open/jwt', this.httpOptions);
  }

}
