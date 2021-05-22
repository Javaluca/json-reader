import { Component, OnInit } from '@angular/core';
import { Visualizer } from 'src/app/model/visualizer';
import { UiSupportService } from 'src/app/services/ui-support.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {

  private _visualizer: Visualizer;

  constructor(private uiSupport: UiSupportService) { }

  ngOnInit(): void {
    this.uiSupport.buildVisualizer().subscribe(
      visualizer => this._visualizer = visualizer
    );
  }

  get visualizer(): Visualizer {
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
}
