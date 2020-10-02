import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Medicamento } from '../dto/medicamento';
import { MedicamentoService } from '../service/medicamento.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.scss']
})
export class DetallesProductoComponent implements OnInit {

  medicamento:Medicamento = new Medicamento();

  constructor(private medService:MedicamentoService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((params: Params) => {
      this.medService.findById(params.id).subscribe(
        (resp) => {
        this.medicamento = resp;
      }, (error) => {
        console.log(error);
      });
    });
  }

}
