import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum BUTTON_HOST_ATTRIBUTES {
  BUTTON = 'button',
  FLAT_BUTTON = 'flat-button',
  ICON_BUTTON = 'icon-button',
  RAISED_BUTTON = 'raised-button',
  STROKED_BUTTON = 'stroked-button',
  FAB_BUTTON = 'fab-button',
}

@Component({
  selector: 'fl-core-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('type') type: BUTTON_HOST_ATTRIBUTES = BUTTON_HOST_ATTRIBUTES.BUTTON;
  @Input('text') text: string = '';
  @Output() clicked: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
