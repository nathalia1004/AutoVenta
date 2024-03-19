import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule
    ],
    declarations:[
        PagListaVehiculosComponent
    ],
    exports:[
        PagListaVehiculosComponent
    ]
})
export class PaginaModule{

}