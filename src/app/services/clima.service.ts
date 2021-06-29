import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = "api.openweathermap.org/data/2.5/weather?&appid=";
  key = "0fadd3f3d074890c1916d9a05a841b08";
  constructor(private http: HttpClient) { }



  getClima(ciudad: string): Promise<any> {
    const URL = this.url + this.key + "&appid=" + ciudad;
    return this.http.get(URL).toPromise();
  };
}
