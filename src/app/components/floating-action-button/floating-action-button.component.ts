import { Component, Input, OnInit } from '@angular/core';

export interface ActionFunction {
  (event: MouseEvent): void
}

export interface ButtonOptions {
  label?: string,
  color?: string,
  icon: string,
  action?: ActionFunction,
  ariaLabel?: string,
  tooltip?: string
}

export interface FloatingActionButtonOptions {
  main: ButtonOptions,
  children?: ButtonOptions[]
}

@Component({
  selector: 'app-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.scss']
})
export class FloatingActionButtonComponent implements OnInit {

  openMenu: boolean = false;

  private _options: FloatingActionButtonOptions;

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set options(options: FloatingActionButtonOptions) {
    this._options = options;
  }

  get options(): FloatingActionButtonOptions {
    return this._options;
  }

  clickMain(event: MouseEvent) {
    this.clickButton(event, this.options.main);
    this.openMenu = !this.openMenu;
  }

  clickButton(event: MouseEvent, item: ButtonOptions) {
    if (!item || !item.action) {
      return;
    }
   item.action(new MouseEvent('click'));
  }

}
