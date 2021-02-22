import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'COMANDA';
  total: number = 0;
  public comidaSeleccionada = 0;

  private comidas: Array<[string, number]> = [
    ['Ternera con Sa Cho', 6.05],
    ['Pato asado de Pekin', 9.5],
    ['Fideos chinos con tres delicias', 4.95],
    ['Pollo con almendras', 4.9],
    ['Cerdo agridulce', 4.7],
    ['Tallarines fritos con gambas', 4.35],
  ];

  public getComidas() {
    return this.comidas;
  }

  public cuenta: Array<[string, number]> = [];

  public addComida() {
    this.cuenta.push(this.comidas[this.comidaSeleccionada]);
    this.total += this.comidas[this.comidaSeleccionada][1];
  }

  public delComida(i: number) {
    this.total -= this.cuenta[i][1];
    this.cuenta.splice(i, 1);
  }
}
