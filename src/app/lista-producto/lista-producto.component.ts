import { Router } from '@angular/router';
import { MedicamentoService } from './../service/medicamento.service';
import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../dto/medicamento';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss']
})
export class ListaProductoComponent implements OnInit {

  medicamentos: Medicamento[];
  medicamento: Medicamento= new Medicamento();

  constructor(private medService: MedicamentoService,
              private rute: Router) { }

  ngOnInit(): void {

    this.medService.getAll().subscribe(
      (resp) => {
        this.medicamentos = resp;
      }, (error) => {
        console.log(error);
      }
    );
  }

}
