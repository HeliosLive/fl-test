import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fl-core-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input('color') color: string;
  @Input('size') size: string = '18px';
  @Input('name') name: string = 'home';
  constructor() {}

  ngOnInit(): void {}
}
