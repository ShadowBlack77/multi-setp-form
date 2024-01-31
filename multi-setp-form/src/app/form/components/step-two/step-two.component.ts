import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent {
  @Output() nextStep = new EventEmitter();

  nextStepClick(): void {
    this.nextStep.emit(3);
  }
}
