import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
  tituloListaAutos: string = "Lista de Automóviles";

   //listaAutos: Auto[] =[];
   muestraImagen: boolean = false;
   filtro: string ="";
   anchoImagen=120;
   margenImagen=10;

  constructor() { }

  ngOnInit() {
  }
  public listaAutos: Array<any>=[
    {
        id:1,
        imagenUrl: 'assets/imagenAutos/Aston.jpg',
        marca: 'Aston Martin',
        modelo: 'Vulcan2-6',
        anio: 2020,
        color: 'Celeste',
        kilometros:'2000',
        precio:'200000',
        calificacion: '*****',
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
        calificacion: '*****',
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
        calificacion: '*****',
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
        calificacion: '*****',
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
        calificacion: '*****',
        },
];
toogleImage(): void {
    this.muestraImagen = !this.muestraImagen;
}

}
