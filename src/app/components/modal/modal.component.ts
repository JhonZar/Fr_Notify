import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Output() cerrar = new EventEmitter<void>(); // Emitir evento al cerrar

  isOpen: boolean = true; // Agregar esta propiedad

  cerrarModal() {
    this.isOpen = false; // Cambiar el estado a cerrado
    this.cerrar.emit(); // Emitir el evento al cerrar
  }
}
