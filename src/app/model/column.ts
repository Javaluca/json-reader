export enum ColumnType {
  STRING,
  DATE,
  NUMBER,
  BOOLEAN
}

export class Column {

  header: string;
  dataField: string;
  type: ColumnType

}
