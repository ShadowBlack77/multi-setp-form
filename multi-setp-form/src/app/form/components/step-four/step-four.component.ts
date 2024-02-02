import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Service } from '../../../interfaces/Service.interface';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrl: './step-four.component.scss'
})
export class StepFourComponent implements OnInit {
  @Output() nextStep = new EventEmitter();

  additionalOptions: Service[] = [];
  selectedOption: string | undefined;
  selectedOptionPrice: number | undefined;
  additionalOptionsPrice: number = 0;
  periodOptionString: string = 'mo';
  finalPrice: number = 0;

  ngOnInit(): void {
    const storedPeriodOption = sessionStorage.getItem('period');
    const storedSelectedOption = sessionStorage.getItem('selectedOption');
    const storedOnlineService = sessionStorage.getItem('onlineService');
    const storedLargerStorage = sessionStorage.getItem('largerStorage');
    const storedCustomizableProfile = sessionStorage.getItem('customizableProfile');

    this.selectedOption = storedSelectedOption!;

    if (this.selectedOption === 'arcade') {
      this.selectedOptionPrice = 9;
    } else if (this.selectedOption === 'advanced') {
      this.selectedOptionPrice = 12;
    } else {
      this.selectedOptionPrice = 15;
    }
  
    if (storedPeriodOption === 'true') {
      this.periodOptionString = 'yr';
      this.selectedOptionPrice = this.selectedOptionPrice! * 10;
    }

    if (storedOnlineService  === 'false') {
      this.additionalOptions.push({ name: 'Online service', price: this.periodOptionString === 'mo' ? 1 : 1 * 10 })
    }

    if (storedLargerStorage === 'false') {
      this.additionalOptions.push({ name: 'Larger storage', price: this.periodOptionString === 'mo' ? 2 : 2 * 10 });
    }

    if (storedCustomizableProfile === 'false') {
      this.additionalOptions.push({ name: 'Customizable profile', price: this.periodOptionString === 'mo' ? 2 : 2 * 10 });
    }

    for (let optionPrice of this.additionalOptions) {
      this.additionalOptionsPrice += optionPrice.price;
    }

    this.finalPrice = this.selectedOptionPrice! + this.additionalOptionsPrice;
  }

  changeOption(): void {
    this.nextStep.emit(2);
  }

  prevStepClick(): void {
    this.nextStep.emit(3);    
  }

  nextStepClick(): void {
    this.nextStep.emit(5);
  }
}
