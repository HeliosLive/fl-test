import { Component, Input, OnInit } from '@angular/core';

export enum LABEL_HOST_ATTRIBUTES {
  LABEL = 'label',
  P = 'p',
  H1 = 'h1',
  H2 = 'mat-raised-button',
  H3 = 'mat-stroked-button',
  SPAN = 'mat-fab',
  mini_fab = 'mat-mini-fab',
}

@Component({
  selector: 'fl-core-label',
  // templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  template: `<label [style.color]="color" [style.font-size]="fontSize">
    {{ lower ? text.toLowerCase() : text }}
  </label>`,
  // template: `<{{type}} [style.color]="color" [style.font-size]="fontSize" >{{text}}</{{type}}>`,
})
export class LabelComponent implements OnInit {
  // @Input('type') type: LABEL_HOST_ATTRIBUTES = LABEL_HOST_ATTRIBUTES.LABEL;
  @Input('text') text: string = '';
  @Input('color') color: string = 'black';
  @Input('fontSize') fontSize: string = '18px';
  @Input('lower') lower: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
