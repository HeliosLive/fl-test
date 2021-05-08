import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

const animationGlobalOptions: AnimationOptions = {
  autoplay: true,
  loop: true,
  renderer: 'svg',
};

function getAnimationPath(animationId: string): string {
  return `assets/animations/${animationId}.json`;
}

@Component({
  selector: 'fl-core-lottie-animation',
  templateUrl: './lottie-animation.component.html',
  styleUrls: ['./lottie-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'fl-core-lottie-animation',
  },
})
export class LottieAnimationComponent implements OnInit {
  @Input() width = 14;
  @Input() height = 14;
  @Input() animationPath: string;

  animationStyles: Partial<CSSStyleDeclaration> = {
    lineHeight: '0.8',
  };
  animationOptions: AnimationOptions;

  ngOnInit() {
    this.animationOptions = {
      ...animationGlobalOptions,
      path: getAnimationPath(this.animationPath),
    };
  }
}
