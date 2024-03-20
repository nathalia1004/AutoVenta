import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor() { }

getVehiculos(){
  return this.listaAutos;
}
private listaAutos: Array<any>=[
  {
      id:1,
      imagenUrl: 'assets/imagenAutos/Aston.jpg',
      marca: 'Aston Martin',
      modelo: 'Vulcan2-6',
      anio: 2020,
      color: 'Celeste',
      kilometros:'2000',
      precio:'200000',
      calificacion: '1',
      },
      {
      id:2,
      imagenUrl: "assets/imagenAutos/Audi.jpg",
      marca: 'Audi',
      modelo: 'Spyder-2',
      anio: 2023,
      color: 'Rosa',
      kilometros:'1000',
      precio:'150000',
      calificacion: '5',
      },
      {
      id:3,
      imagenUrl: "assets/imagenAutos/Bentley.jpg",
      marca: 'Bentley',
      modelo: 'Continental',
      anio: 2021,
      color: 'Lila',
      kilometros:'5000',
      precio:'350000',
      calificacion: '2',
      },
      {
      id:4,
      imagenUrl: "assets/imagenAutos/Ferrari.jpg",
      marca: 'Ferrari',
      modelo: 'Portofino',
      anio: 2022,
      color: 'Amarillo',
      kilometros:'1000',
      precio:'250000',
      calificacion: '4',
      },
      {
      id:5,
      imagenUrl: "assets/imagenAutos/Land Rover.jpg",
      marca: 'Land Rover',
      modelo: 'Defender143',
      anio: 2023,
      color: 'Verde',
      kilometros:'5000',
      precio:'160000',
      calificacion: '3',
      },
];

}
