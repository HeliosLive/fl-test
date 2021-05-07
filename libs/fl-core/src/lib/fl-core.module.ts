import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { LabelModule } from './label/label.module';

@NgModule({
  imports: [CommonModule, ButtonModule, InputModule, LabelModule],
  exports: [ButtonModule, InputModule, LabelModule],
})
export class FlCoreModule {}
