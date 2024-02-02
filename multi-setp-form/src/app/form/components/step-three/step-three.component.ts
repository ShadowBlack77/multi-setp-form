import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent implements OnInit {
  @Output() nextStep = new EventEmitter();

  fb = inject(FormBuilder);

  onlineServiceChecked: boolean | null = false;
  largerStorageChecked: boolean | null = false;
  customizableProfileChecked: boolean | null = false;
  periodOptionSelected: boolean | null = false;

  ngOnInit(): void {
    const storedOnlineService = sessionStorage.getItem('onlineService');
    const storedLargerStorage = sessionStorage.getItem('largerStorage');
    const storedCustomizableProfile = sessionStorage.getItem('customizableProfile');

    const storedPeriodOption = sessionStorage.getItem('period');

    if (storedPeriodOption) {
      this.periodOptionSelected = storedPeriodOption === 'true';
    }

    if (storedOnlineService) {
      this.form.patchValue({
        onlineService: storedOnlineService !== 'true',
      });

      this.onlineServiceChecked = storedOnlineService !== 'true';
    };

    if (storedLargerStorage) {
      this.form.patchValue({
        largerStorage: storedLargerStorage !== 'true',
      });

      this.largerStorageChecked = storedLargerStorage !== 'true';
    };

    if (storedCustomizableProfile) {
      this.form.patchValue({
        customizableProfile: storedCustomizableProfile !== 'true'
      });
  
      this.customizableProfileChecked = storedCustomizableProfile !== 'true';
    };
  }

  form = this.fb.group({
    onlineService: [false],
    largerStorage: [false],
    customizableProfile: [false]
  });

  optionClick(selectedAddOns: string): void {
    switch(selectedAddOns) {
      case 'online-service':
        this.onlineServiceChecked = !this.form.controls.onlineService.value;
        break;
      case 'larger-storage':
        this.largerStorageChecked = !this.form.controls.largerStorage.value;
        break;
      case 'customizable-profile':
        this.customizableProfileChecked = !this.form.controls.customizableProfile.value;
    }
  }

  onSubmit(): void {
    const onlineService: boolean | null = !this.form.controls.onlineService.value;
    const onlineServiceString = onlineService.toString();

    const largerStorage: boolean | null = !this.form.controls.largerStorage.value;
    const largerStorageString = largerStorage.toString();

    const customizableProfile: boolean | null = !this.form.controls.customizableProfile.value;
    const customizableProfileString = customizableProfile.toString();

    sessionStorage.setItem('onlineService', onlineServiceString);
    sessionStorage.setItem('largerStorage', largerStorageString);
    sessionStorage.setItem('customizableProfile', customizableProfileString);

    this.nextStep.emit(4);
  };

  prevStepClick(): void {
    this.nextStep.emit(2);    
  }
}
