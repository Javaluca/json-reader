import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiSupportService } from 'src/app/services/ui-support.service';

@Component({
  selector: 'app-json-page',
  templateUrl: './json-page.component.html',
  styleUrls: ['./json-page.component.scss']
})
export class JsonPageComponent implements OnInit, OnDestroy {

  private _textInput: string;

  constructor(private readonly uiSupport: UiSupportService) { }

  ngOnInit(): void {
    this._textInput = this.uiSupport.textInput || '';
  }

  ngOnDestroy(): void {
    this.uiSupport.textInput = this._textInput || '';
  }

  set textInput(text: string) {
    this._textInput = text;
  }

  get textInput(): string {
    return this._textInput;
  }

}
