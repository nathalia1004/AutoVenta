import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

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
      return this._filtro;
    }
    set filtro(filtro:string){
      this._filtro=filtro;
      //this.consultaVehiculos();
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
    //this.consultaVehiculos();
    console.log('ingreso a ejecutarse');
    this.consultarVehiculos();
    
  }

  consultarVehiculos(){
    this.vehiculoService.getVehiculos().subscribe( respuesta =>{
      console.log(respuesta);
      this.listaAutos=respuesta;
    });
  }

  eliminar(codigo:string){
    Swal.fire({
      title:"Estas seguro que quieres eliminar este registro?",
      
      showCancelButton: true,
      confirmButtonText:"Sí",
      cancelButtonText: "No",
      icon:"question"
    }).then((res)=>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data=>{
          if(data.codigo=='1'){
            this.consultarVehiculos();
            Swal.fire({
              title:"Mensaje",
              text: "Vehículo eliminado con éxito",
              icon:"success"
            });
          }
        });
      }
    });
  }

  //consultaVehiculos(){
    //this.vehiculoService.getVehiculos(this.filtro).subscribe(data=>{
      //this.listaAutos= data;
    //});
    
  //}
  
  recepcion(dato:number){
    console.log('Dato: ',dato);
    }
  

toogleImage(): void {
    this.muestraImagen = !this.muestraImagen;
}

}
