import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public edadUno = 0;
  public edadDos = 0;
  public resultSuma = 0;
  public resultPromedio = 0;

  constructor() { }

  ngOnInit() {
  }

  Suma() {
    this.resultSuma = this.edadUno + this.edadDos;
  }

  Promedio() {
    this.resultPromedio = (this.edadUno + this.edadDos)/2;
  }

  CalcularClick() {
    this.Suma();
    this.Promedio();
  }
}

