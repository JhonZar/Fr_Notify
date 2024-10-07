import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ModalComponent, CommonModule, MessageComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  isModalOpen: boolean = false;

  @ViewChild('mensaje') mensajeComponent!: MessageComponent;

  abrirModal() {
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
  }

  eliminar(id: number) {
    // Aquí puedes implementar la lógica de eliminación

    // Mostrar la notificación de éxito
    this.mensajeComponent.mostrar(`Elemento ${id} eliminado con éxito!`, 'success');
  }

  // También puedes mostrar un mensaje de error en otro lugar si es necesario
  mostrarError() {
    this.mensajeComponent.mostrar('Hubo un error al eliminar el elemento.', 'error');
  }

}
