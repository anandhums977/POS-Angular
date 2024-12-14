import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    TranslateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

 
  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2,
    private authService: AuthService,  
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    const inputs = this.elRef.nativeElement.querySelectorAll('.input');

    inputs.forEach((input: HTMLElement) => {
      this.renderer.listen(input, 'focus', () => {
        const parent = input.closest('.input-div');
        if (parent) {
          this.renderer.addClass(parent, 'focus');
        }
      });

      this.renderer.listen(input, 'blur', () => {
        const parent = input.closest('.input-div');
        if (parent && !(<HTMLInputElement>input).value) {
          this.renderer.removeClass(parent, 'focus');
        }
      });
    });
  }

  onLogin(): void {
    console.log(this.username , this.password);
    
    if (this.username && this.password) {
      this.authService.login();
      this.router.navigate(['/operations-manager-dashboard']);
    } else {
      console.log('Please enter username and password.');
    }
  }
}
