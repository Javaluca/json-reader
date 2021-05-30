import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiSupportService } from 'src/app/services/ui-support.service';

@Component({
  selector: 'app-json-page',
  templateUrl: './json-page.component.html',
  styleUrls: ['./json-page.component.scss']
})
export class JsonPageComponent implements OnInit {

  constructor(private readonly uiSupport: UiSupportService) {
  }

  ngOnInit(): void {

  }

  set textInput(text: string) {
    this.uiSupport.textInput = text || '';
  }

  get textInput(): string {
    return this.uiSupport.textInput || '';
  }

  clickRun(event: MouseEvent) {
    this.uiSupport.sendText(this.textInput);
  }

}
