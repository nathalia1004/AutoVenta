import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule
    ],
    declarations:[
        PagListaVehiculosComponent,
        PagVehiculoComponent
    ],
    exports:[
        PagListaVehiculosComponent,
        PagVehiculoComponent
    ]
})
export class PaginaModule{

}