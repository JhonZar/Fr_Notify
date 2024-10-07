import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
interface AccordionItem {
  title: string;
  content: TemplateRef<any>; // Cambiado a TemplateRef<any>
}
@Component({
  selector: 'app-acordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acordion.component.html',
  styleUrl: './acordion.component.css'
})
export class AcordionComponent {
  @Input() items: AccordionItem[] = [];
  expandedIndex: number | null = null;

  toggle(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
}
