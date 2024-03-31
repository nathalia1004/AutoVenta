import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ListaClientes',
  templateUrl: './ListaClientes.component.html',
  styleUrls: ['./ListaClientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  tituloListaClientes: string = "Lista de Clientes";
  listaClientes:Array<any> =[];
  

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.consultarClientes();
  }
  consultarClientes(){
    this.clienteService.getClientes().subscribe(respuesta =>{
      this.listaClientes=respuesta;
    }
    );
  }


  eliminar(id:string){
    Swal.fire({
      title:"Estas seguro que quieres eliminar este registro?",
      
      showCancelButton: true,
      confirmButtonText:"Sí",
      cancelButtonText: "No",
      icon:"question"
    }).then((res)=>{
      if(res.isConfirmed){
        this.clienteService.eliminarCliente(id).subscribe(data=>{
          if(data.codigo =='1'){
            this.consultarClientes();
            Swal.fire({
              title:"Mensaje",
              text: "Cliente eliminado con éxito",
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

  
}
