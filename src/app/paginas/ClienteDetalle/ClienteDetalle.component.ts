import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../utilitarios/modelos/Cliente';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ClienteDetalle',
  templateUrl: './ClienteDetalle.component.html',
  styleUrls: ['./ClienteDetalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

  quiereContacto: boolean = false;

  cliente?: Cliente;

  constructor( private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
