import { Component, EventEmitter, OnInit, Output, inject, ElementRef, HostListener, ViewChild, Host, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
  animations: [
    trigger('formStepOneAnim', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s .5s ease-in-out')
      ])
    ])
  ]
})
export class StepOneComponent implements OnInit {
  @Output('nextStep') nextStep = new EventEmitter();
  @Input('animSateInput') animSateInput: string = 'end';
  @ViewChild('stepOneSection') stepOneSection!: ElementRef;

  animState: string = 'start'

  fb = inject(FormBuilder);

  @HostListener('window:load')
  onLoad() {
    this.animState = this.animSateInput;
  }

  ngOnInit(): void {
    const storedUsername = sessionStorage.getItem('username');
    const storedEmail = sessionStorage.getItem('email');
    const storedPhone = sessionStorage.getItem('phone');

    if (storedUsername) {
      this.form.patchValue({
        username: storedUsername
      });
    }

    if (storedEmail) {
      this.form.patchValue({
        email: storedEmail
      });
    }

    if (storedPhone) {
      this.form.patchValue({
        phone: storedPhone
      });
    }
  }

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

    if (this.form.controls.phone.value === null) {
      this.phoneError = 'This field is required';
    } else if (this.form.controls.phone.value.length < 9) {
      this.phoneError = 'Pole musi zawierać przynajmniej 9 znaków';
    }

    if(this.form.valid) {
      const username: string = this.form.controls.username.value;
      const email: string = this.form.controls.email.value;
      const phoneNumber: string = this.form.controls.phone.value;
      
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('phone', phoneNumber);

      this.nextStep.emit(2); 
    }
  }
}
