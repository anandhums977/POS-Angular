import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonLabel: string = '';
  @Input() buttonType: string = 'primary';
  @Input() btnColor: string = 'green';
  @Output() buttonclicked = new EventEmitter<any>();

  onButtonClick(event: any) {
    this.buttonclicked.emit(event);
  }
}
