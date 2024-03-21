import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
  tituloListaAutos: string = "Lista de Automóviles";

   //listaAutos: Auto[] =[];
    muestraImagen: boolean = false;
    filtro: string ="";
    anchoImagen=120;
    margenImagen=10;

  @Input() valor: string = '';
  listaAutos:Array<any> = [];
  constructor(
    private vehiculoService: VehiculoService) { 
    
  }

  ngOnInit() {
    this.listaAutos= this.vehiculoService.getVehiculos();
  }
  
  recepcion(dato:number){
    console.log('Dato: ',dato);
    }
  

toogleImage(): void {
    this.muestraImagen = !this.muestraImagen;
}

}
