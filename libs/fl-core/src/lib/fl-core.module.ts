import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { LabelModule } from './label/label.module';
import { IconModule } from './icon/icon.module';
import { LottieAnimationModule } from './lottie-animation/lottie-animation.module';

@NgModule({
  imports: [
    CommonModule,
    // ButtonModule,
    // InputModule,
    // LabelModule,
    // IconModule,
    // LottieAnimationModule,
  ],
  exports: [
    // ButtonModule,
    // InputModule,
    // LabelModule,
    // IconModule,
    // LottieAnimationModule,
  ],
})
export class FlCoreModule {}
