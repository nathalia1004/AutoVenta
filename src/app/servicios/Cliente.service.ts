import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from '../utilitarios/modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor() { }

//baseUrl = "http://epico.gob.ec/vehiculo/public/api/";

/*httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};*/
getClientes(){
  return this.listaClientes;
}

private listaClientes: Array<Cliente> =[
  {
    "id":10,
    "nombre":"Nathalia",
    "apellido":"Condor",
    "password": "1223sss",
    "telefono": "1233",
    "email":"aaa"
  }
];


}
