import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../common/button/button.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-create-pos',
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
  templateUrl: './create-pos.component.html',
  styleUrls: ['./create-pos.component.scss'],
})
export class CreatePosComponent {
  posForm: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) {
    this.posForm = this.fb.group({
      name: ['', Validators.required],
      state: ['', Validators.required],
      zone: ['', Validators.required],
      area: ['', Validators.required],
      manager: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.posForm.valid) {
      console.log('Form Submitted:', this.posForm.value);
    }
  }
}
