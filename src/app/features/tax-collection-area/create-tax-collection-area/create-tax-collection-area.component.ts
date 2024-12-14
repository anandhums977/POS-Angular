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
  selector: 'app-create-tax-collection-area',
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
  templateUrl: './create-tax-collection-area.component.html',
  styleUrls: ['./create-tax-collection-area.component.scss'],
})
export class CreateTaxCollectionAreaComponent {
  taxCollectionAreaForm: FormGroup;

  constructor(public dialogRef: DialogRef, private fb: FormBuilder) {
    this.taxCollectionAreaForm = this.fb.group({
      name: ['', Validators.required],
      zone: ['', Validators.required],
      state: ['', Validators.required],
      zoneManager: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.taxCollectionAreaForm.valid) {
      console.log('Form Submitted:', this.taxCollectionAreaForm.value);
    }
  }
}
