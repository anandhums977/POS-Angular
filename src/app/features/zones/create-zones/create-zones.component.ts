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
  selector: 'app-create-zones',
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
  templateUrl: './create-zones.component.html',
  styleUrls: ['./create-zones.component.scss'],
})
export class CreateZonesComponent {
  zonesForm: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) {
    this.zonesForm = this.fb.group({
      zoneName: ['', Validators.required],
      zoneManager: ['', Validators.required],
      region: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.zonesForm.valid) {
      console.log('Form Submitted:', this.zonesForm.value);
    }
  }
}
