import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { LoginComponent } from './login/login.component';
import { ListarMedicamentoComponent } from './listar-medicamento/listar-medicamento.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: 'ingresoProducto',component: IngresoProductoComponent},
  {path: 'listamedicamento',component: ListarMedicamentoComponent, children:[
    {path: 'detallesmedicamento/:id',component: DetallesProductoComponent},
    {path: 'ingresoProducto',component: IngresoProductoComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
