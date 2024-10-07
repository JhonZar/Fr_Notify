import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { NavComponent } from "../../components/nav/nav.component";
import { CardComponent } from "../../components/card/card.component";
import { ChartComponent } from "../../components/chart/chart.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, NavComponent, CardComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
