import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cliente } from '../utilitarios/modelos/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor(private http:HttpClient) { }

baseUrl = "http://epico.gob.ec/vehiculo/public/api/";

httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
getClientes():Observable<Cliente[]>{
  return this.http.get<Respuesta>(this.baseUrl+"clientes/").pipe(
    map(respuesta => respuesta.data)
  );
}
insertCliente(cliente: Cliente){
  return this.http.post<Respuesta>(this.baseUrl+"cliente/", cliente, this.httpOptions);
}
getCliente(id:string){
  return this.http.get<Respuesta>(this.baseUrl+"cliente/"+ id)
}
actualizarCliente(cliente:Cliente, id: string){
  return this.http.put<Respuesta>(this.baseUrl+"cliente/"+ id, cliente,this.httpOptions);
}
eliminarCliente(id:string){
  return this.http.delete<Respuesta>(this.baseUrl+"cliente/"+id);
}

addCliente(cliente:Cliente){
  this.listaClientes.push(cliente);
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
export interface Respuesta{
  codigo: string;
  mensaje: string;
  data: Array<Cliente>|Cliente|any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}

