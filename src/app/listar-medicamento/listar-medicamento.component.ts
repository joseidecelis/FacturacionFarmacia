import { Router } from '@angular/router';
import { MedicamentoService } from './../service/medicamento.service';
import { Medicamento } from './../dto/medicamento';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-medicamento',
  templateUrl: './listar-medicamento.component.html',
  styleUrls: ['./listar-medicamento.component.scss']
})
export class ListarMedicamentoComponent implements OnInit {
  medicamentos: Medicamento[];
  medicamento: Medicamento = new Medicamento();

  displayedColumns: string[] = ['nombre', 'precio', 'cantidad', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private medService: MedicamentoService,
    private rute: Router) { }
  ngOnInit(): void {
    this.medService
      .getAll()
      .subscribe(medicamentos => (this.dataSource.data = medicamentos));

    /*  {
        this.medicamentos = resp;
      }, (error) => {
        console.log(error);
      }
    ); */
  }
  ngAfterViewInit(): void {

    this.dataSource.paginator = this.paginator;
  }
  eliminar(id: number) {
    let r = confirm("Seguro que desea eliminar?");
    if (r) {
      this.medService.deleteMedicamento(id)
        .subscribe(data => {
          this.ngOnInit();
        })

    }

  }

}


