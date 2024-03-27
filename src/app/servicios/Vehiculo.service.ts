import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {


constructor(private http: HttpClient) { }
baseUrl = "http://epico.gob.ec/vehiculo/public/api/";

httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

getVehiculos():Observable<Vehiculo[]>{
  /*const escucha: Observable<Array<Vehiculo>>= new Observable(
    escuchando=>{
      let lista= this.listaAutos.filter(elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()));
      escuchando.next(lista);
    }
  );
  return escucha;*/
  return this.http.get<Respuesta> (this.baseUrl+"vehiculos/").pipe(
    map(respuesta => respuesta.data)
  );
}

insertVehiculo(vehiculo:Vehiculo){
  
  
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);
}
getVehiculo(codigo:string){
  return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+ codigo);
}

actualizarVehiculo(vehiculo:Vehiculo, codigo: string){
  return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+ codigo, vehiculo,this.httpOptions);
}
eliminarVehiculo(codigo:string){
  return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}

/*getVehiculo(codigo:string):Observable<Vehiculo|undefined>{
  const escucha: Observable<Vehiculo|undefined>= new Observable(
    escuchando=>{
      let vehiculo= this.listaAutos.find(element => element.codigo === codigo);
      escuchando.next(vehiculo);
    }
  );
  return escucha;
}*/
addVehiculo(vehiculo:Vehiculo){
  this.listaAutos.push(vehiculo);
}

private listaAutos: Array<Vehiculo>=[
  {
      codigo:"1",
      foto: 'assets/imagenAutos/Aston.jpg',
      marca: 'Aston Martin',
      modelo: 'Vulcan2-6',
      anio: 2020,
      color: 'Celeste',
      kilometraje:'2000',
      precio:200000,
      calificacion: 1,
      },
      {
      codigo:"2",
      foto: "assets/imagenAutos/Audi.jpg",
      marca: 'Audi',
      modelo: 'Spyder-2',
      anio: 2023,
      color: 'Rosa',
      kilometraje:'1000',
      precio:150000,
      calificacion: 5,
      },
      {
      codigo:"3",
      foto: "assets/imagenAutos/Bentley.jpg",
      marca: 'Bentley',
      modelo: 'Continental',
      anio: 2021,
      color: 'Lila',
      kilometraje:'5000',
      precio:350000,
      calificacion: 2,
      },
      {
      codigo:"4",
      foto: "assets/imagenAutos/Ferrari.jpg",
      marca: 'Ferrari',
      modelo: 'Portofino',
      anio: 2022,
      color: 'Amarillo',
      kilometraje:'1000',
      precio:250000,
      calificacion: 4,
      },
      {
      codigo:"5",
      foto: "assets/imagenAutos/Land Rover.jpg",
      marca: 'Land Rover',
      modelo: 'Defender143',
      anio: 2023,
      color: 'Verde',
      kilometraje:'5000',
      precio:160000,
      calificacion: 3,
      },
      {
        codigo:"6",
        foto: "assets/imagenAutos/Land Rover.jpg",
        marca: 'Land Rover',
        modelo: 'Defender143',
        anio: 2023,
        color: 'Verde',
        kilometraje:'800',
        precio:10000,
        calificacion: 2,
        },
];

}
export interface Respuesta{
  codigo: string;
  mensaje: string;
  data: Array<Vehiculo>|Vehiculo|any;
}
