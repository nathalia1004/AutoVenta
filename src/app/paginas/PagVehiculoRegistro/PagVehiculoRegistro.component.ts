import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { validadorCodigo } from '../../validaciones/VehiculoValidaciones';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


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
    private activedRoute: ActivatedRoute
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
    this.activedRoute.params.subscribe(param =>{
      let codigo = param ['codigo'];
      this.vehiculoServicie.getVehiculo
    });
  }
  
  guardar(){
    /*let vehiculo:Vehiculo ={...this.formulario.value};
    this.vehiculoServicio.addVehiculo(vehiculo);
    console.log('Formulario',this.formulario.value)*/
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
      )
    }

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