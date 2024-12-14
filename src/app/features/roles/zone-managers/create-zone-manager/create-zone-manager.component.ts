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
  selector: 'app-create-zone-manager',
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
  templateUrl: './create-zone-manager.component.html',
  styleUrl: './create-zone-manager.component.scss'
})
export class CreateZoneManagerComponent {
  zoneManagerForm: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) {
    this.zoneManagerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: [''],
      communeZone: [''],
      pos: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.zoneManagerForm.valid) {
      console.log('Form Submitted:', this.zoneManagerForm.value);
    }
  }
}
