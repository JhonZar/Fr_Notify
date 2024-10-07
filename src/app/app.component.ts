import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { DockComponent } from "./components/dock/dock.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, DockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fr_Notify';
  dockItems = [
    { icon: 'home', label: 'Inicio', route: 'dashboard' },
    { icon: 'settings', label: 'Configuración', route: '/settings' },
    { icon: 'info', label: 'Información', route: '/info' },
  ];
}
