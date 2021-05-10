import { text } from '@storybook/addon-knobs';
import { IconComponent } from './icon.component';

export default {
  title: 'IconComponent',
  component: IconComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  props: {
    color: text('color', ''),
    size: text('size', '18px'),
    name: text('name', 'home'),
  },
});
