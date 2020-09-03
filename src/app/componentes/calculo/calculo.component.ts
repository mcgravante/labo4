import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {
  public edadUno = 0;
  public edadDos = 0;
  public resultSuma = 0;
  public resultPromedio = 0;

  constructor() { }

  ngOnInit(): void {
  }

  Suma() {
    this.resultSuma = this.edadUno + this.edadDos;
  }

  Promedio() {
    this.resultPromedio = (this.edadUno + this.edadDos) / 2;
  }

  CalcularClick() {
    this.Suma();
    this.Promedio();
  }

  LimpiarClick() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.resultSuma = 0;
    this.resultPromedio = 0;
  }
}
