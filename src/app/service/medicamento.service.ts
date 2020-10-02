import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicamento } from '../dto/medicamento';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  medicamento: Medicamento = new Medicamento();


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8000/api/medicamentos');
  }

  guardar(medicamento: Medicamento): Observable<any> {
    return this.http.post('http://localhost:8000/api/guardar', medicamento);
  }

  findById(id: number): Observable<any> {
    return this.http.get('http://localhost:8000/api/medicamento/'+id);
  }

  deleteMedicamento(id:number): Observable<any> {
    return this.http.delete('http://localhost:8000/api/medicamento/'+id);
  }

}
