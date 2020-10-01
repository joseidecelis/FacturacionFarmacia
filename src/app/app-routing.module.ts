import { TablaTestComponent } from './tabla-test/tabla-test.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'tabla', component: TablaTestComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ingresoProducto',component: IngresoProductoComponent},
  {path: 'listaproductos',component: ListaProductoComponent, children:[
    {path: 'detallesproductos',component: DetallesProductoComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
