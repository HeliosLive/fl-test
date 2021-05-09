import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let spectator: Spectator<IconComponent>;
  const createComponent = createComponentFactory({
    component: IconComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: { name: 'home' },
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
