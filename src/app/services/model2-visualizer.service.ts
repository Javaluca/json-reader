import { Injectable } from '@angular/core';
import { Column, ColumnType } from '../model/column';
import { Visualizer } from '../model/visualizer';


@Injectable({
  providedIn: 'root'
})
export class Model2VisualizerService {

  constructor() { }

  private static basicVisualizer(): Visualizer {
    const ret: Visualizer = new Visualizer;

    ret.columns = [
      { header: 'Value', dataField: '_this', type: ColumnType.STRING }
    ];

    return ret;
  }

  build(model: any[]): Visualizer {
    if (!model || !Array.isArray(model) || model.length === 0) {
      return Model2VisualizerService.basicVisualizer();
    }
    return this.buildByItem(model[0]);
  }

  private buildByItem(item: any): Visualizer {
    if (!item) {
      throw new Error('Not valid item');
    }

    const ret: Visualizer = new Visualizer();

    for (const prop in item) {
      if (prop === undefined) {
        continue;
      }

      const col: Column = { header: prop, dataField: prop, type: ColumnType.STRING };

      if (typeof item[prop] === 'string') {
        col.type = ColumnType.STRING;
      } else if (typeof item[prop] === 'number') {
        col.type = ColumnType.NUMBER;
      } else if (typeof item[prop] === 'boolean') {
        col.type = ColumnType.NUMBER;
      }
      ret.columns.push(col);
    }
    return ret;
  }
}
