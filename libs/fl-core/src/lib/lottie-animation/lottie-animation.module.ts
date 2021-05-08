import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieAnimationComponent } from './lottie-animation.component';
import { LottieModule } from 'ngx-lottie';

// Note we need a separate function as it's required
// by the AOT compiler
export function playerFactory() {
  return import('lottie-web');
}
@NgModule({
  declarations: [LottieAnimationComponent],
  imports: [
    CommonModule,
    LottieModule.forRoot({
      player: playerFactory,
      useCache: true,
    }),
  ],
  exports: [LottieAnimationComponent],
})
export class LottieAnimationModule {}
