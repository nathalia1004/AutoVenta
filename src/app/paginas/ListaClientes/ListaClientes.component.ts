import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ListaClientes',
  templateUrl: './ListaClientes.component.html',
  styleUrls: ['./ListaClientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  tituloListaClientes: string = "Lista de Clientes";
  public rows:number =15;
  public page: number =1;
  public pages: number= 0;
  public filtro: string ="";

  @Input()valor:string='';
  listaClientes:Array<any> =[];
  

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.consultarClientes();
  }
  consultarClientes(){
    this.clienteService.getClientes(this.filtro, this.rows, this.page).subscribe( respuesta =>{
      if(respuesta.codigo=='1'){
        this.listaClientes = respuesta.data;
        this.pages= respuesta.pages;
        this.paginar(respuesta.pages);
      }
  });
}

cambiarPagina(pagina:number){
  this.page = pagina;
  this.consultarClientes();
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
    this.consultarClientes();
  }
}

atras(){
  if(this.page> 1){
    this.page--;
    this.consultarClientes();
  }
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
