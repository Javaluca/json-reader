import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private uiSupportService: UiSupportService, private router: Router) {
    this.uiSupportService.jsonEventEmitter.subscribe(
      event => {
        if (event.error) {
          this._color = 'warn'
        } else {
          this._color = 'primary'
        }
      }
    );
  }

  get barColor(): string {
    return this._color || 'primary';
  }
}
