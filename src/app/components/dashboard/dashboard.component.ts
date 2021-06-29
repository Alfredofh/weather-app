import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urlImagen = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  ciudad = "";

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }


  obtenerClima() {


    this._climaService.getClima(this.ciudad)
      .then(response => {
        console.log(this.ciudad);
        this.ciudad = response;
      })
      .catch(error => console.log(error));
  }
}
