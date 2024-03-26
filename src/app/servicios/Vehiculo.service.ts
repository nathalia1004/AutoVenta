import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor() { }

getVehiculos(){
  return this.listaAutos;
}
getVehiculo(codigo:string):Observable<Vehiculo|undefined>{
  const escucha: Observable<Vehiculo|undefined>= new Observable(
    escuchando=>{
      let vehiculo= this.listaAutos.find(ele => ele.codigo === codigo);
      escuchando.next(vehiculo);
    }
  );
  return escucha;
}
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
