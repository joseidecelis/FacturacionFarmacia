import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { DetallesClienteComponent } from './detalles-cliente/detalles-cliente.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "",component:BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listaclientes', component: ListaClienteComponent},
  {path: 'ingresoProducto',component: IngresoClienteComponent},
  {path: 'crearfactura',component: CrearFacturaComponent},
  {path: 'detallescliente',component: DetallesClienteComponent},
  {path: 'listaproductos',component: ListaProductoComponent},
  {path: 'detallesproductos',component: DetallesProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
