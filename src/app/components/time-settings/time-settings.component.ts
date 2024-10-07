import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './time-settings.component.html',
  styleUrl: './time-settings.component.css'
})
export class TimeSettingsComponent {
  selectedTime: string = '08:00'; // Hora predeterminada

  onTimeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedTime = input.value;
    console.log('Hora seleccionada:', this.selectedTime);
  }
}
