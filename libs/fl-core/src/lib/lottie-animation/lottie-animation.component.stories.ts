import { text, number, boolean } from '@storybook/addon-knobs';
import { LottieAnimationComponent } from './lottie-animation.component';

export default {
  title: 'LottieAnimationComponent',
  component: LottieAnimationComponent
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    width: number('width', 14),
    height: number('height', 14),
    animationPath: text('animationPath', ''),
  }
})