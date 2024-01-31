import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  currentStep: number = 1;

  onNextStep(stepNumber: number):void {
    this.currentStep = stepNumber;
  }
}
