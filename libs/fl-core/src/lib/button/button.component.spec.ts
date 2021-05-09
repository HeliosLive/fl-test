import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory({
    component: ButtonComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: { text: 'Button text' },
    });
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should display the text', () => {
    const button = spectator.query('button');
    expect(button.textContent).toContain('Button text');
  });

  it('should display the loading text when button is disabled and loading atst', () => {
    const button = spectator.query('button');
    spectator.setInput('loadingText', 'loading text...');
    spectator.setInput('loading', true);
    spectator.setInput('disabled', true);
    expect(button.textContent).toContain('loading text...');
  });
});
