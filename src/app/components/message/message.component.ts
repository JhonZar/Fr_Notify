import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  visible: boolean = false;
  mensaje: string = '';
  tipo: 'success' | 'error' = 'success'; // Propiedad para el tipo de mensaje

  mostrar(mensaje: string, tipo: 'success' | 'error' = 'success') {
    this.mensaje = mensaje;
    this.tipo = tipo; // Establecer el tipo de mensaje
    this.visible = true;

    // Ocultar después de un tiempo
    setTimeout(() => {
      this.cerrar();
    }, 3000); // 3 segundos
  }

  cerrar() {
    this.visible = false;
  }
}
