import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { StepOneComponent } from './form/components/step-one/step-one.component';
import { StepTwoComponent } from './form/components/step-two/step-two.component';
import { StepThreeComponent } from './form/components/step-three/step-three.component';
import { StepFourComponent } from './form/components/step-four/step-four.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }