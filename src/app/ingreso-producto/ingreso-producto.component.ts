import { Medicamento } from './../dto/medicamento';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../service/medicamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-producto',
  templateUrl: './ingreso-producto.component.html',
  styleUrls: ['./ingreso-producto.component.scss']
})
export class IngresoProductoComponent implements OnInit {

  medicamento: Medicamento= new Medicamento();
  id: number;
  constructor(private _location: Location,
              private medService: MedicamentoService,
              private rute: Router,
              private activeR: ActivatedRoute)
  {}

  backClicked(): void {
    this._location.back();
  }

  ngOnInit(): void {
    this.activeR.queryParams
      .subscribe(
        params => {
          this.id = params.id;
          if (params.id != null && params.id != undefined  ){
            this.medService.findById(this.id).subscribe(
              (resp) => {
                this.medicamento = resp;
              }, (error) => {
              }
            )
          }else{
            this.medicamento = new Medicamento();
          }
        }
      )
  }
  guardarMedicamento(): void {
    this.medService.guardar(this.medicamento).subscribe(
      (resp) => {
        alert('Guardado correctamente');
        this.rute.navigate(['listamedicamento']);
      }, (error) => {
        console.log(error);
      }
    );
  }


}
