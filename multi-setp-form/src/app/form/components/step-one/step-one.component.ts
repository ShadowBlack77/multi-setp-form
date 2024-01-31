import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent {
  @Output('nextStep') nextStep = new EventEmitter();

  nextStepClick(): void {
    this.nextStep.emit(2);    
  }
}
