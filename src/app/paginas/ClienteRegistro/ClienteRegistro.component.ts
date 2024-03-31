import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { validadorId, validadorNombreAp } from '../../validaciones/ClienteValidaciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ClienteRegistro',
  templateUrl: './ClienteRegistro.component.html',
  styleUrls: ['./ClienteRegistro.component.css']
})
export class ClienteRegistroComponent implements OnInit {
  mostrarCamposContacto: boolean = false;

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location, 
    private clienteService: ClienteService) {

      this.formulario= this.formBuilder.group({
        "id":['',[Validators.required,validadorId()]],
        "nombre":['',[Validators.required,validadorNombreAp()]],
        "apellido":['',[Validators.required,validadorNombreAp()]],
        "password":['',[Validators.required]],
        "telefono":[],
        "email":[]
      });
    }

  ngOnInit() {
    
  }

  toggleCamposContacto(event: any): void {
    this.mostrarCamposContacto = event.target.checked;
    
  }

  guardar(){
      if(this.formulario.valid){
          this.clienteService .insertCliente({...this.formulario.value}).subscribe(
            respuesta =>{
              if(respuesta.codigo=='1'){
                Swal.fire({
                  title:"Mensaje",
                  text: "Cliente Registrado con éxito",
                  icon: "success"
                }).then( res =>{
                  this.formulario.reset();
                });
              }else{
                Swal.fire({
                  title:"Mensaje",
                  text: "No se pudo registrar el cliente:  "+ respuesta.mensaje,
                  icon: "error"
                });
              }
            }
          );
        }else{
          Swal.fire({
            title:"Mensaje",
            text: "Faltan llenar campos!",
            icon: "error"
          });
        }
      
  }

  goBack(): void {
    this.location.back();
  }

}
