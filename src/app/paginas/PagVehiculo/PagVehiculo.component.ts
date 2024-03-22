import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo?:Vehiculo={
    id: "",
    marca:"",
    modelo:""
  };
  constructor( 
    private route: ActivatedRoute,
    private vehiculoService:VehiculoService) {
  
  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.vehiculo = this.vehiculoService.getVehiculo(params['id']);
    })
  }
}
