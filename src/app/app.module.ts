import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BienvenidaComponent,
    DetallesProductoComponent,
    ListaProductoComponent,
    IngresoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
