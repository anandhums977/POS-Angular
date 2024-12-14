import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../common/button/button.component';

@Component({
  selector: 'app-create-state',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './create-state.component.html',
  styleUrl: './create-state.component.scss',
})
export class CreateStateComponent {
  stateForm: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) {
    this.stateForm = this.fb.group({
      name: ['', Validators.required],
      admin: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.stateForm.valid) {
      console.log('Form Submitted:', this.stateForm.value);
    }
  }
}
