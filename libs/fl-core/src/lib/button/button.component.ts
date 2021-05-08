import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export enum BUTTON_HOST_ATTRIBUTES {
  BUTTON = 'button',
  FLAT_BUTTON = 'flat-button',
  ICON_BUTTON = 'icon-button',
  RAISED_BUTTON = 'raised-button',
  STROKED_BUTTON = 'stroked-button',
  FAB_BUTTON = 'fab-button',
}

export enum BUTTON_COLOR_ATTRIBUTES {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  WHITE = 'white',
  DEFAULT = '#00295c',
}

@Component({
  selector: 'fl-core-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input('type') type: BUTTON_HOST_ATTRIBUTES = BUTTON_HOST_ATTRIBUTES.BUTTON;
  @Input('color') color: BUTTON_COLOR_ATTRIBUTES =
    BUTTON_COLOR_ATTRIBUTES.DEFAULT;
  @Input('textColor') textColor: BUTTON_COLOR_ATTRIBUTES =
    BUTTON_COLOR_ATTRIBUTES.WHITE;
  @Input('text') text: string = '';
  @Input('loadingText') loadingText: string = 'loading..';
  @Input('disabled') disabled: boolean = false;
  @Input() icon?: string;
  @Input() tabindex?: number;
  @Input() loading: boolean = false;
  @Input() testId: string;
  @Input() colorScheme: string;
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
