import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
export function validadorId():ValidatorFn{
    return(control: AbstractControl):ValidationErrors|null=>{
        const codigoV = /^\d{1,4}$/;
        let value=control.value;
        if(codigoV.test(value)){
        return null;
        }
    return {'idValidate': true};
    }
  }
  
  export function validadorNombreAp(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nombreApRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/; 
      let value = control.value;
      if (nombreApRegex.test(value)) {
        return null; 
      }
      return { 'nombreApValidate': true };
    };
  }