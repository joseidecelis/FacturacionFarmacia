import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "",component:BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'listaclientes', component: ListaClienteComponent},
  {path: 'ingresoCliente',component: IngresoClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
