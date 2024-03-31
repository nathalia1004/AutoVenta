import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private vehiculoServicie: VehiculoService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { 
    this.formulario= this.formBuilder.group({
      "codigo":['',[Validators.required, validadorCodigo()]],
      "marca":['',[Validators.required]],
      "modelo":['',[Validators.required]],
      "anio":['',[Validators.required]],
      "kilometraje":['',[Validators.required]],
      "precio":[],
      "calificacion":['',[Validators.required]]
    });
  }

  ngOnInit() {
    /*this.activedRoute.params.subscribe(param =>{
      let codigo = param ['codigo'];
      this.vehiculoServicie.getVehiculo
    });*/
  }
  
  guardar(){
    
  if(this.formulario.valid){
      this.vehiculoServicie.insertVehiculo({...this.formulario.value}).subscribe(
        respuesta =>{
          if(respuesta.codigo=='1'){
            Swal.fire({
              title:"Mensaje",
              text: "Vehículo Registrado con éxito",
              icon: "success"
            }).then( res =>{
              this.formulario.reset();
            });
          }else{
            Swal.fire({
              title:"Mensaje",
              text: "No se pudo registrar el vehículo:  "+ respuesta.mensaje,
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


export function validadorCodigoComparativo(){
  return (formulario: FormGroup): ValidationErrors|null=>{
    let valor = formulario.controls['codigo'].value;
    let valor2 = formulario.controls['codigo_confirm'].value;
    if(valor===valor2){
      return null;
    }
    return {'codigocomparativo':true};
  }
}