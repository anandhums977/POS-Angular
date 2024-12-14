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
  selector: 'app-create-operations-manager',
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
  templateUrl: './create-operations-manager.component.html',
  styleUrl: './create-operations-manager.component.scss',
})
export class CreateOperationsManagerComponent {
  operationsManagerForm: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) {
    this.operationsManagerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: [''],
      communeZone: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      zoneManagers: [''],
    });
  }

  onSubmit() {
    if (this.operationsManagerForm.valid) {
      console.log('Form Submitted:', this.operationsManagerForm.value);
    }
  }
}
