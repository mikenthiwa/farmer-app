import {Component, WritableSignal, signal} from '@angular/core';
import { LoginForm} from "../model/login-model";
import {LoginFormComponent} from "../login-form/login-form.component";
import { AuthService } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LoginFormComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm: WritableSignal<LoginForm> = signal({
    type: 'username',
    title: 'Enter your username to continue',
    label: 'username',
    button: 'continue'
  });
  username: WritableSignal<string> = signal('');
  password: WritableSignal<string> = signal('');

  constructor(private authService: AuthService, private snackBar: MatSnackBar) {

  }
  submit(value: string): void {
    if(this.loginForm().type === 'username') {
      this.username.update(() => value);
      this.loginForm.update(() => {
        return {
          type: 'password',
          title: 'Enter your password to continue',
          label: 'password',
          button: 'sign in'
        }
      });
    } else {
      this.password.update(() => value);
      this.loginUser();
    }
  }

  loginUser(): void {
    this.authService.login({username: this.username(), password: this.password()}).subscribe((response) => {
      console.log(response);
      const message = 'Login successful';
      this.snackBar.open(message)
    })
  }



}
