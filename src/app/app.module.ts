import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetallesProductoComponent } from './detalles-producto/detalles-producto.component';
import { IngresoProductoComponent } from './ingreso-producto/ingreso-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material-module';
import { FormsModule } from '@angular/forms';
import { ListarMedicamentoComponent } from './listar-medicamento/listar-medicamento.component';
import { DetallesComponent } from './detalles/detalles.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DetallesProductoComponent,
    IngresoProductoComponent,
    ListarMedicamentoComponent,
    DetallesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
