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
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-tax',
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
  templateUrl: './create-tax.component.html',
  styleUrl: './create-tax.component.scss',
})
export class CreateTaxComponent {
  taxForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.taxForm = this.fb.group({
      name: ['', Validators.required],
      state: [''],
      taxType: [''],
      amount: ['', Validators.required],
    });
  }

  goBack() {
    this.router.navigateByUrl('root-admin');
  }

  onSubmit() {
    if (this.taxForm.valid) {
      console.log('Form Submitted:', this.taxForm.value);
    }
  }
}
