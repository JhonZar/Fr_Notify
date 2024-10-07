import { Component, Input, input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RedirectCommand, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }
  onSubmit() {
    console.log('Correo:', this.email);
    console.log('Contraseña:', this.password);
    this.router.navigate(['/dashboard']);
  }
}
