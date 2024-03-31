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
    //private _filtro:string="";
    public rows:number =15;
    public page: number =1;
    public pages: number= 0;
    public filtro: string ="";
 
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
    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe( respuesta =>{
      if(respuesta.codigo=='1'){
        this.listaAutos = respuesta.data;
        this.pages= respuesta.pages;
        this.paginar(respuesta.pages);
      }
      
    });
  }
  cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultarVehiculos();
  }
  listaPaginas: Array<number>=[];
  paginar(pages: number){
    this.listaPaginas= [];
    for(let i=1; i<=pages; i++){
      this.listaPaginas.push(i);
    }
  }
  siguiente(){
    if(this.page< this.pages){
      this.page++;
      this.consultarVehiculos();
    }
  }

  atras(){
    if(this.page> 1){
      this.page--;
      this.consultarVehiculos();
    }
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
          }else{
            Swal.fire({
              title:"Mensaje",
              text: "No se pudo eliminar el registro!" + data.mensaje,
              icon:"error"});
          }
        });
      }
    });
  }

  
  recepcion(dato:number){
    console.log('Dato: ',dato);
    }
  

toogleImage(): void {
    this.muestraImagen = !this.muestraImagen;
}

}
