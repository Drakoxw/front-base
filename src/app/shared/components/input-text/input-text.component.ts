import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
})
export class InputTextComponent {
  @Output() valueChange = new EventEmitter<string>();
  @Input() placeholder: string = '';
  @Input() control!: FormControl;
  @Input() hasError: boolean = false;
  value: string = '';
  onChage() {
    this.valueChange.emit(this.value);
  }
  clearInput() {
    this.value = '';
    if (this.control) {
      this.control.setValue('');
    }
  }
}
