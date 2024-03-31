import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../utilitarios/modelos/Cliente';
import { Location } from '@angular/common';
import { ClienteService } from '../../servicios/Cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { validadorId, validadorNombreAp } from '../../validaciones/ClienteValidaciones';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ClienteDetalle',
  templateUrl: './ClienteDetalle.component.html',
  styleUrls: ['./ClienteDetalle.component.css']
})
export class ClienteDetalleComponent implements OnInit {

  cliente?: Cliente;
  formulario: FormGroup;

  constructor( private activatedRoute: ActivatedRoute,
    private clienteService:ClienteService,
    private formBuilder:FormBuilder,
    private location: Location) {
      this.formulario= this.formBuilder.group({
        "id":['',[Validators.required,validadorId()]],
        "nombre":['',[Validators.required,validadorNombreAp()]],
        "apellido":['',[Validators.required,validadorNombreAp()]],
        "password":['',[Validators.required]],
        "telefono":[],
        "email":['',[Validators.email]]
      });
      this.formulario.controls['id'].disable();
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.clienteService.getCliente(params['id']).subscribe(data =>{
        if(data.codigo=='1'){
          this.cliente=data.data;
          this.formulario.controls['id'].setValue(this.cliente?.id);
          this.formulario.controls['nombre'].setValue(this.cliente?.nombre);
          this.formulario.controls['apellido'].setValue(this.cliente?.apellido);
          this.formulario.controls['password'].setValue(this.cliente?.password);
          this.formulario.controls['telefono'].setValue(this.cliente?.telefono);
          this.formulario.controls['email'].setValue(this.cliente?.email);
        }else{
          Swal.fire({
            title:"Mensaje de Alerta",
            text: "No se pudo cargar la información",
            icon: "error"
          });
        }
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
  guardar(){
    if(this.formulario.valid){
      this.clienteService.actualizarCliente({...this.formulario.value}, this.formulario.controls['id'].value).subscribe(data =>{
        if(data.codigo =='1'){
          Swal.fire({
            title: "Mensaje",
            text: "Cliente actualizado con éxito!",
            icon: "info"
          });
        }
      });
    }else{
      Swal.fire({
        title: "Mensaje",
        text: "Faltan completar campos!",
        icon: "error"
      });
    }
  }

}
