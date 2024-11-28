import {
  Component,
  Input,
  signal,
  Output,
  WritableSignal,
  EventEmitter,
} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule} from "@angular/forms";
import { LoginForm } from "../model/login-model";


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @Input() loginForm: WritableSignal<LoginForm> = signal({
    type: 'username',
    title: 'Enter your username to continue',
    label: 'username',
    button: 'continue'
  });
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  formValue: string = '';

  onSubmit(): void {
    this.submit.emit(this.formValue);
    this.formValue = ''
  }
}
