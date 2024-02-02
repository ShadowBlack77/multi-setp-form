import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  animations: [
    trigger('banerAnim', [
      state('start', style({
        opacity: 0
      })),
      state('end', style({
        opacity: 1
      })),
      transition('start => end', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('formStepOneAnim', [
      state('start1', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
      state('end1', style({
        opacity: 1,
      })),
      transition('start1 => end1', [
        animate('1s .5s ease-in-out')
      ])
    ]),
    trigger('formStepTwoAnim', [
      state('start2', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
      state('end2', style({
        opacity: 1
      })),
      transition('start2 => end2', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('formStepThreeAnim', [
      state('start3', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
      state('end3', style({
        opacity: 1
      })),
      transition('start3 => end3', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('formStepFourAnim', [
      state('start4', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
      state('end4', style({
        opacity: 1
      })),
      transition('start4 => end4', [
        animate('1s ease-in-out')
      ])
    ]),
    trigger('formStepFiveAnim', [
      state('start5', style({
        opacity: 0,
        pointerEvents: 'none'
      })),
      state('end5', style({
        opacity: 1
      })),
      transition('start5 => end5', [
        animate('1s ease-in-out')
      ])
    ])
  ]
})
export class FormComponent {
  @ViewChild('banerElement') banerElement!: ElementRef;
  @ViewChild('stepOneSection') stepOneSection!: ElementRef;
  @ViewChild('stepTwoSection') stepTwoSection!: ElementRef;
  @ViewChild('stepThreeSection') stepThreeSection!: ElementRef;
  @ViewChild('stepFourSection') stepFourSection!: ElementRef;
  @ViewChild('stepFiveSection') stepFiveSection!: ElementRef;

  currentStep: number = 1;
  serverRes: boolean = false;

  animateState: string = 'start';
  animeStateStep: string = 'start1';
  animStateStepTwo: string = 'start2';
  animStateStepThree: string = 'start3';
  animStateStepFour: string = 'start4';
  animStateStepFive: string = 'start5';

  onNextStep(stepNumber: number):void {
    this.currentStep = stepNumber;
    setTimeout(() => {
      if (stepNumber === 2) {
        this.animStateStepTwo = 'end2';  
      } else if (stepNumber === 3) {
        this.animStateStepThree = 'end3';
      } else if (stepNumber === 4) {
        this.animStateStepFour = 'end4';
      } else if (stepNumber === 5) {
        this.animStateStepFive = 'end5';
      }
    });
  }

  onServResponse(serverRes: boolean) {
    this.serverRes = serverRes;
  }

  @HostListener('window:load')
  onLoad() {
    this.animateState = 'end';
    this.animeStateStep = 'end1';
  }
}
