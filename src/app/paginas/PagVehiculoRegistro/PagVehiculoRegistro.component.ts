import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';


@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  vehiculo:Vehiculo

  constructor(
    private vehiculoServicio: VehiculoService
  ) { 
    
    this.vehiculo={
    codigo: '',
    foto:null,
    marca: '',
    modelo: '',
    anio: 0,
    color: '',
    kilometraje:'',
    precio:0,
    calificacion: 0
    };
  }

  ngOnInit() {
  }
  
  guardar(){
    this.vehiculoServicio.addVehiculo(this.vehiculo);
    console.log('grabado con exito');
  }

}
