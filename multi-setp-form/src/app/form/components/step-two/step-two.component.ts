import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {
  @Output() nextStep = new EventEmitter();
  @ViewChild('periodSelected', { read: ElementRef }) periodSelected!: ElementRef;

  selectedOption: string | undefined;
  periodOption: boolean | undefined;

  ngOnInit(): void {
    const storedPeriodOption = sessionStorage.getItem('period');

    if (storedPeriodOption) {
      this.periodOption = storedPeriodOption === 'true';
    }
  }

  toggleOption(option: string): void {
    this.selectedOption = option;
  }

  togglePeriod(): void {
    this.periodOption = this.periodSelected.nativeElement.checked;
  }

  nextStepClick(): void {
    const periodOption: boolean = this.periodSelected.nativeElement.checked;
    const periodOptionToString: string = periodOption.toString();

    sessionStorage.setItem('period', periodOptionToString);
    this.nextStep.emit(3);
  }

  prevStepClick(): void {
    this.nextStep.emit(1);
  }
}