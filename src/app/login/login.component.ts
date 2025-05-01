import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showPassword: boolean = false;
  loginForm: FormGroup;

  private router = inject(Router);

  // Validation patterns
  private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  private passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      rememberMe: [false]
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      alert(
        'Please fill in all required fields correctly.\n\n' +
        'Password must:\n' +
        'Contains at least one lowercase letter (a-z).\n' +
        'Contains at least one uppercase letter (A-Z).\n' +
        'Contains at least one digit (0-9).\n' +
        'Contains at least one special character (!@#$%^&*).\n' +
        'Has at least 8 characters in total.'
      );
      return;
    }
  
    const formValue = this.loginForm.value;
  
    console.log('Login successful:', formValue);
    this.router.navigate(['/dashboard']);
  }
  
}
