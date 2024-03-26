import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { PagNotFoundComponent } from "./PagNotFound/PagNotFound.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule
    ],
    declarations:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagNotFoundComponent
    ],
    exports:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagNotFoundComponent
    ]
})
export class PaginaModule{

}