import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  currentStep: number = 1;
  serverRes: boolean = false;

  onNextStep(stepNumber: number):void {
    this.currentStep = stepNumber;
  }

  onServResponse(serverRes: boolean) {
    this.serverRes = serverRes;
  }
}
