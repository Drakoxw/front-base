import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css',
})
export class InputSearchComponent {
  @Output() valueChange = new EventEmitter<string>();
  @Input() placeholder = 'Buscar...';
  value = '';

  onChage() {
    this.valueChange.emit(this.value);
  }

  clearInput() {
    this.value = '';
    this.onChage();
  }
}
