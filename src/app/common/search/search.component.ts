import { Component, EventEmitter, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText: string = '';
  @Output() searchValueChangeEvent = new EventEmitter<string>();

  sendSearchText(value: string): void {
    this.searchValueChangeEvent.emit(value);
  }
}
