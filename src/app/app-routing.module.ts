import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: PagListaVehiculosComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path:"**",
    component: PagNotFoundComponent,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
