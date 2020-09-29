import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';
import { DetallesClienteComponent } from './detalles-cliente/detalles-cliente.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ListaClienteComponent,
    IngresoClienteComponent,
    BienvenidaComponent,
    CrearFacturaComponent,
    DetallesClienteComponent,
    DetallesProductoComponent,
    ListaProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
