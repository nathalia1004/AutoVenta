import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';


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
    this.listaClientes =this.clienteService.getClientes();
  }

  
}
