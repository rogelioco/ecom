import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ProductoComponent} from "./components/producto/producto.component";

const app_routes: Routes = [
  {path: 'home', component: InicioComponent},
  {path: 'producto', component: ProductoComponent},
  {path: '**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, {useHash: true} )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
