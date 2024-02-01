import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {
  @Output() nextStep = new EventEmitter();
  @ViewChild('periodSelected', { read: ElementRef }) periodSelected!: ElementRef;

  selectedOption: string = 'arcade';
  periodOption: boolean = false;
  

  ngOnInit(): void {
    const storedPeriodOption = sessionStorage.getItem('period');
    const storedSelectedOption = sessionStorage.getItem('selectedOption');

    if (storedPeriodOption) {
      this.periodOption = storedPeriodOption === 'true';
    }

    if (storedSelectedOption) {
      this.selectedOption = storedSelectedOption;
    }
  }

  toggleOption(option: string): void {
    this.selectedOption = option;
  }

  togglePeriod(): void {
    this.periodOption = this.periodSelected.nativeElement.checked;
  }

  nextStepClick(): void {
    const selectedOption: string = this.selectedOption;

    const periodOption: boolean = this.periodSelected.nativeElement.checked;
    const periodOptionToString: string = periodOption.toString();

    sessionStorage.setItem('period', periodOptionToString);
    sessionStorage.setItem('selectedOption', selectedOption);
    this.nextStep.emit(3);
  }

  prevStepClick(): void {
    this.nextStep.emit(1);
  }
}