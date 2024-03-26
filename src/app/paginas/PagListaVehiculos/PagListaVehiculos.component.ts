import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
  tituloListaAutos: string = "Lista de Automóviles";

   //listaAutos: Auto[] =[];
    muestraImagen: boolean = false;
    //filtro: string ="";
    private _filtro:string="";
    get filtro(){
      return this._filtro
    }
    set filtro(data:string){
      this._filtro=data;
      this.consultaVehiculos();
    }
    anchoImagen=120;
    margenImagen=10;

  @Input() valor: string = '';
  listaAutos:Array<any> = [];


  constructor(
    private vehiculoService: VehiculoService
    ) { 
    
  }

  ngOnInit() {
    this.consultaVehiculos();
  }

  consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro).subscribe(data=>{
      this.listaAutos= data;
    });
    
  }
  
  recepcion(dato:number){
    console.log('Dato: ',dato);
    }
  

toogleImage(): void {
    this.muestraImagen = !this.muestraImagen;
}

}
