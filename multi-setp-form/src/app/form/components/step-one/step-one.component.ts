import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
})
export class StepOneComponent {
  @Output('nextStep') nextStep = new EventEmitter();

  fb = inject(FormBuilder);

  nameError: string | undefined;
  emailError: string | undefined;
  phoneError: string | undefined;

  form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(9)]]
  })

  onSubmit(): void {
    if (this.form.controls.username.value === '') {
      this.nameError = 'This field is required';
    } else if (this.form.controls.username.value.length < 3 || this.form.controls.username.value.length > 16) {
      this.nameError = 'Pole musi zawierać od 3 do 16 znaków';
    } else {
      this.nameError = '';
    }

    if (this.form.controls.email.value === '') {
      this.emailError = 'This field is required';
    } else if (this.form.controls.email.errors) {
      this.emailError = 'Wpisany email jest niepoprawny';
    }

    console.log(this.form.controls.phone.value);
    

    if (this.form.controls.phone.value === null) {
      this.phoneError = 'This field is required';
    } else if (this.form.controls.phone.value.length < 9) {
      this.phoneError = 'Pole musi zawierać przynajmniej 9 znaków';
    }

    if(this.form.valid) {
      this.nextStep.emit(2); 
    }
  }
}
