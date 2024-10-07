import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { colorSets, NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  chartData: any[] = [];
  colorScheme: any;

  constructor() {

    this.chartData = [
      { name: 'Enero', value: 30 },
      { name: 'Febrero', value: 50 },
      { name: 'Marzo', value: 70 },
      { name: 'Abril', value: 90 }
    ];


    this.colorScheme = colorSets.find(s => s.name === 'vivid');
  }
}
