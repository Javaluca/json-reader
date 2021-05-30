import { Component, OnInit } from '@angular/core';
import { FloatingActionButtonOptions } from 'src/app/components/floating-action-button/floating-action-button.component';
import { Visualizer } from 'src/app/model/visualizer';
import { UiSupportService } from 'src/app/services/ui-support.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  private _visualizer: Visualizer;

  private _options: FloatingActionButtonOptions;

  constructor(private uiSupport: UiSupportService) { }

  ngOnInit(): void {
  }

  get visualizer(): Visualizer {
    if (!this._visualizer) {
      this.uiSupport.buildVisualizer().subscribe(
        visualizer => this._visualizer = visualizer
      );
    }
    return this._visualizer;
  }

  get dataProvider(): [] {
    return this.uiSupport.dataProvider || [];
  }

  get columnsField(): string[] {
    if (!this.visualizer) {
      return [];
    }

    return this.visualizer.columns.map(c => c.dataField);
  }

  get options(): FloatingActionButtonOptions {
    if (!this._options) {
      this._options = {
        main: {
          color: 'primary',
          icon: 'menu',
          // action: (event: MouseEvent) => { this.openMenu = !this.openMenu }
        },
        children: [
          { label: 'Query', icon: 'search', action: (event: MouseEvent) => { console.log(event)} },
          { label: 'Save', icon: 'save', action: (event: MouseEvent) => { console.log(event)} },
          { label: 'Clear', icon: 'clear', action: (event: MouseEvent) => { console.log(event)} },
        ]
      };
    }
    return this._options;
  }
}
