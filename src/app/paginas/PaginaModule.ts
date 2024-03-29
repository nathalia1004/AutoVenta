import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { PagVehiculoComponent } from "./PagVehiculo/PagVehiculo.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { PagNotFoundComponent } from "./PagNotFound/PagNotFound.component";
import { ListaClientesComponent } from "./ListaClientes/ListaClientes.component";
import { ClienteDetalleComponent } from "./ClienteDetalle/ClienteDetalle.component";
import { ClienteRegistroComponent } from "./ClienteRegistro/ClienteRegistro.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagNotFoundComponent,
        ListaClientesComponent,
        ClienteDetalleComponent,
        ClienteRegistroComponent
    ],
    exports:[
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagNotFoundComponent,
        ListaClientesComponent,
        ClienteDetalleComponent,
        ClienteRegistroComponent
    ]
})
export class PaginaModule{

}