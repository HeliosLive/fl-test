import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

export enum BUTTON_HOST_ATTRIBUTES {
  button = 'mat-button',
  flat = 'mat-flat-button',
  icon = 'mat-icon-button',
  raised = 'mat-raised-button',
  stroked = 'mat-stroked-button',
  fab = 'mat-fab',
  mini_fab = 'mat-mini-fab',
}

export enum BUTTON_COLOR_ATTRIBUTES {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  WHITE = 'white',
  DEFAULT = '#00295c',
}

@Component({
  selector: `fl-core-button`,
  // selector: `fl-core-button[button],fl-core-button[raised-button],fl-core-button[fab-button]`,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  @Input('type') type: BUTTON_HOST_ATTRIBUTES = BUTTON_HOST_ATTRIBUTES.button;
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

  constructor(public elementRef: ElementRef) {}

  ngOnInit(): void {}

  /** Gets whether the button has one of the given attributes. */
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some((attribute) =>
      this._getHostElement().hasAttribute(attribute)
    );
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }
}
