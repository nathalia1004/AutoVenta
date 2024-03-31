import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { ListaClientesComponent } from './paginas/ListaClientes/ListaClientes.component';
import { ClienteDetalleComponent } from './paginas/ClienteDetalle/ClienteDetalle.component';
import { ClienteRegistroComponent } from './paginas/ClienteRegistro/ClienteRegistro.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    children: [
      {
        path: "",
        component: PagListaVehiculosComponent
      },
      {
        path: "registro",
        component: PagVehiculoRegistroComponent
      },
      {
        path: ":codigo",
        component: PagVehiculoComponent
      }
    ]
  },
  {
    path: "clientes",
    children: [
      {
        path: "",
        component: ListaClientesComponent
      },
      {
        path: "registro",
        component: ClienteRegistroComponent
      },
      {
        path: ":id",
        component: ClienteDetalleComponent
      }
    ]
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
