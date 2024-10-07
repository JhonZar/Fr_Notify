import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})
export class DockComponent {
  @Input() items: { icon: string; label: string; route: string }[] = []; // Añadimos la propiedad 'route'

  constructor(private router: Router) { } // Inyectamos el Router

  // Método para navegar a la ruta especificada
  navigateTo(route: string): void {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
