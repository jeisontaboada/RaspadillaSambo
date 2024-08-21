import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  template: `
    <div
      class="w-screen h-screen flex justify-center items-center bg-slate-300"
    >
      <form
        [formGroup]="formulario"
        class="flex flex-col gap-3 bg-white p-10 rounded-lg shadow-lg"
        (submit)="login()"
      >
        <h1>Login</h1>
        <mat-form-field>
          <mat-label>Usuario</mat-label>
          <input
            matInput
            placeholder="Ingresa tu usuario"
            formControlName="usuario"
          />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Contraseña</mat-label>
          <input
            matInput
            placeholder="Ingresa tu contraseña"
            formControlName="password"
          />
        </mat-form-field>
        <button
          [disabled]="!formulario.valid"
          mat-raised-button
          color="primary"
        >
          Ingresar
        </button>
      </form>
    </div>
  `,
})
export class LoginComponent {
  formulario = new FormGroup({
    usuario: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  authService = inject(AuthService);

  router = inject(Router)

  login() {
    if (this.formulario.invalid) {
      return;
    }

    const { usuario, password } = this.formulario.value;
    if (!usuario || !password) {
      return alert('Usuario y contraseña son requeridos');
    }

    this.authService.login(usuario, password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('expiresAt', res.expiresAt);
        this.router.navigateByUrl('/menu/cremas');
      },
      error: (err) => {
        console.log(err?.error?.message);
      }
    });
    
  }
}
