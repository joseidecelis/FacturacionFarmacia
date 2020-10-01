import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Medicamento } from '../dto/medicamento';
import { MedicamentoService } from '../service/medicamento.service';

@Component({
  selector: 'app-detalles-producto',
  templateUrl: './detalles-producto.component.html',
  styleUrls: ['./detalles-producto.component.scss']
})
export class DetallesProductoComponent implements OnInit {
  medicamento:Medicamento=new Medicamento();
  constructor(private medService:MedicamentoService
    ,private activeRoute: ActivatedRoute
    ,private route: Router) { }

  ngOnInit(): void {
    //con el "Params" se obtienen los datos de la ruta
    this.activeRoute.params.subscribe((params: Params)=>{
      this.medService.findById(params.id).subscribe((resp)=>{
        this.medicamento = resp;
      },(error)=>{
        console.log(error);
      });
    });
  }

}
