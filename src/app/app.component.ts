import { Component } from '@angular/core';
import { UiSupportService } from './services/ui-support.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-reader';

  private _color: string;

  navLinks = [
    { location: '/json', label: 'JSON', icon: 'account_circle' },
    { location: '/table', label: 'Table', icon: 'work' }
  ];

  constructor(private uiSupportService: UiSupportService) {
    this.uiSupportService.jsonEventEmitter.subscribe(
      event => this._color = event.error ? 'warn': 'primary'
    );
  }

  get barColor(): string {
    return this._color || 'primary';
  }
}
