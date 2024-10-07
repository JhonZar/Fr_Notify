import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TimeSettingsComponent } from "../../components/time-settings/time-settings.component";
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AcordionComponent } from "../../components/acordion/acordion.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TimeSettingsComponent, FormsModule, AcordionComponent,CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  days: string[] = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  departments: string[] = [
    'La Paz',
    'Cochabamba',
    'Santa Cruz',
    'Tarija',
    'Potosí',
    'Oruro',
    'Chuquisaca',
    'Beni',
    'Pando'
  ];

  selectedDays: string[] = [];

  holidays: { date: string, description: string, department: string }[] = [
    { date: '2024-01-01', description: 'Año Nuevo', department: 'La Paz' },
    { date: '2024-02-05', description: 'Día de la Revolución', department: 'Cochabamba' },
    { date: '2024-03-21', description: 'Día del Mar', department: 'Santa Cruz' }
  ];

  departmentHolidays: { date: string; description: string }[] = [];
  showDateInput: boolean = false;
  newHolidayDate: string = '';
  newHolidayDescription: string = '';
  newHolidayDepartment: string = ''; // Asegúrate de agregar esta línea

  @ViewChild('timeTemplate', { static: true }) timeTemplate!: TemplateRef<any>;
  @ViewChild('laborales', { static: true }) laborales!: TemplateRef<any>;
  @ViewChild('feriadosNacionales', { static: true }) feriadosNacionales!: TemplateRef<any>;
  @ViewChild('feriadosDepartamentales', { static: true }) feriadosDepartamentales!: TemplateRef<any>;

  accordionItems: { title: string, content: TemplateRef<any> }[] = [];

  ngOnInit() {
    this.accordionItems = [
      { title: 'Configuración de Hora de Envío', content: this.timeTemplate },
      { title: 'Configuración de días Laborales', content: this.laborales },
      { title: 'Configuración de feriados Nacionales', content: this.feriadosNacionales },
      { title: 'Configuración de feriados Departamentales', content: this.feriadosDepartamentales }
    ];
  }

  toggleDay(day: string): void {
    const index = this.selectedDays.indexOf(day);
    if (index > -1) {
      this.selectedDays.splice(index, 1);
    } else {
      this.selectedDays.push(day);
    }
  }

  addHoliday(): void {
    if (this.newHolidayDate && this.newHolidayDescription && this.newHolidayDepartment) { // Asegúrate de que newHolidayDepartment no esté vacío
      this.holidays.push({
        date: this.newHolidayDate,
        description: this.newHolidayDescription,
        department: this.newHolidayDepartment
      });
      this.newHolidayDate = ''; // Limpiar el input de fecha después de agregar
      this.newHolidayDescription = ''; // Limpiar el input de descripción después de agregar
      this.newHolidayDepartment = ''; // Limpiar el select después de agregar
      this.showDateInput = false; // Ocultar el input
    }
  }

  removeHoliday(holidayToRemove: { date: string; description: string; department: string }): void {
    this.holidays = this.holidays.filter(holiday => holiday.date !== holidayToRemove.date);
  }

  addDepartmentHoliday(): void {
    if (this.newHolidayDate && this.newHolidayDescription) {
      this.departmentHolidays.push({
        date: this.newHolidayDate,
        description: this.newHolidayDescription,
      });
      this.newHolidayDate = ''; // Limpiar el input de fecha después de agregar
      this.newHolidayDescription = ''; // Limpiar el input de descripción después de agregar
    }
  }

  removeDepartmentHoliday(holidayToRemove: { date: string; description: string }): void {
    this.departmentHolidays = this.departmentHolidays.filter(holiday => holiday.date !== holidayToRemove.date);
  }
}
