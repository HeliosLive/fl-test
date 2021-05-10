import { text, number, boolean } from '@storybook/addon-knobs';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
};

enum BUTTON_HOST_ATTRIBUTES {
  button = 'mat-button',
  flat = 'mat-flat-button',
  icon = 'mat-icon-button',
  raised = 'mat-raised-button',
  stroked = 'mat-stroked-button',
  fab = 'mat-fab',
  mini_fab = 'mat-mini-fab',
}

enum BUTTON_COLOR_ATTRIBUTES {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  WHITE = 'white',
  DEFAULT = '#00295c',
}

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  props: {
    type: text('type', BUTTON_HOST_ATTRIBUTES.button),
    color: text('color', BUTTON_COLOR_ATTRIBUTES.DEFAULT),
    textColor: text('textColor', BUTTON_COLOR_ATTRIBUTES.WHITE),
    text: text('text', 'Save'),
    loadingText: text('loadingText', 'Saving..'),
    disabled: boolean('disabled', true),
    icon: text('icon', 'save'),
    tabindex: number('tabindex', 0),
    loading: boolean('loading', false),
    testId: text('testId', ''),
    colorScheme: text('colorScheme', ''),
  },
});
