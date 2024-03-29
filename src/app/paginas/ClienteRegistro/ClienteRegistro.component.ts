import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ClienteRegistro',
  templateUrl: './ClienteRegistro.component.html',
  styleUrls: ['./ClienteRegistro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  quiereContacto: boolean = false;

  //formulario: FormGroup;

  constructor(private location: Location) {

      /*this.formulario= this.formBuilder.group({
        "id":['',[Validators.required]],
        "nombre":['',[Validators.required]],
        "apellido":['',[Validators.required]],
        "password":['',[Validators.required]],
        "telefono":['',[Validators.required]],
        "email":[]
      });*/
     }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }

}
