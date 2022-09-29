import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // La función ionViewWillEnter carga funciones al cargar la página, a diferencia de ngOnInit, que sólo lo hace una vez

  ionViewWillEnter() {
    this.generarGraf();
  }

  generarGraf() {
    const canvas = document.getElementById('myChart');
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],
          datasets: [{
            label: 'ppm cetona',
            data: [0.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
    });

  }
}
