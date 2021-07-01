import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = "http://api.openweathermap.org/data/2.5/weather?&appid=";
  key = "0900af5a2e17471e0b1dea4e06d91faa";
  constructor(private http: HttpClient) { }



  getClima(ciudad: string): Observable<any> {
    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);
  };
}
