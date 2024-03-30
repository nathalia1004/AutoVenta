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
  mostrarCamposContacto: boolean = false;

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location) {

      this.formulario= this.formBuilder.group({
        "id":['',[Validators.required]],
        "nombre":['',[Validators.required]],
        "apellido":['',[Validators.required]],
        "password":['',[Validators.required]],
        "telefono":['',[Validators.required]],
        "email":[]
      });
    }

  ngOnInit() {
    
  }

  toggleCamposContacto(event: any): void {
    this.mostrarCamposContacto = event.target.checked;
    
  }

  goBack(): void {
    this.location.back();
  }

}
