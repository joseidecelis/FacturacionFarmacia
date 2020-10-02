import { PrimeraComponent } from './primera/primera.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { LoginComponent } from './login/login.component';
import { ListarMedicamentoComponent } from './listar-medicamento/listar-medicamento.component';
import { DetallesComponent } from './detalles/detalles.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "primera", component: PrimeraComponent, children: [
    { path: '', component: ListarMedicamentoComponent, children: [
        { path: 'detallesmedicamento/:id', component: DetallesProductoComponent },
        { path: 'ingresoProducto', component: IngresoProductoComponent },
        { path: '', component: DetallesComponent }
      ]}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
