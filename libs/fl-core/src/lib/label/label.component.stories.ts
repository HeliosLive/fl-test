import { text, number, boolean } from '@storybook/addon-knobs';
import { LabelComponent } from './label.component';

export default {
  title: 'LabelComponent',
  component: LabelComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  props: {
    text: text('text', 'this is a test label with blue color'),
    color: text('color', 'blue'),
    fontSize: text('fontSize', '18px'),
    lower: boolean('lower', true),
  },
});
