import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-producto',
  templateUrl: './ingreso-producto.component.html',
  styleUrls: ['./ingreso-producto.component.scss']
})
export class IngresoProductoComponent implements OnInit {

  constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
