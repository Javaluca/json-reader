import { Column } from "./column";

export class Visualizer {

  private _columns: Column[];

  constructor() {
    this.columns = [];
  }

  get columns(): Column[] {
    return this._columns || [];
  }

  set columns(columns: Column[]) {
    this._columns = columns || [];
  }

}
