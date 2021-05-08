import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { LottieAnimationModule } from '../lottie-animation/lottie-animation.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule, LottieAnimationModule, IconModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
