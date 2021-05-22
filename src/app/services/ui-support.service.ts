import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { JsonEvent } from '../model/json-event';
import { Visualizer } from '../model/visualizer';
import { Model2VisualizerService } from './model2-visualizer.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UiSupportService {

  private _visualizer: Visualizer | undefined;
  private _dataProvider: any;
  private _text: string;

  private _jsonEventEmitter: EventEmitter<JsonEvent>;

  constructor(private model2Visualizer: Model2VisualizerService, private _snackBar: MatSnackBar) {
    this._jsonEventEmitter = new EventEmitter<JsonEvent>();
    this._text = '';
  }

  get jsonEventEmitter(): EventEmitter<JsonEvent> {
    return this._jsonEventEmitter;
  }

  set textInput(json: string) {

    const jsonEvent: JsonEvent = new JsonEvent;

    try {
      this._text = json;

      this._dataProvider = JSON.parse(json);

      if (!Array.isArray(this._dataProvider)) {
        this._dataProvider = [ this._dataProvider ];
      }

      this._snackBar.dismiss();

    } catch (error) {
      jsonEvent.error = error;
      this._snackBar.open(error.message, undefined, {
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      });
    } finally {
      this._jsonEventEmitter.emit(jsonEvent);
    }
  }

  get textInput(): string {
    return this._text;
  }

  buildVisualizer(): Observable<Visualizer> {
    this._visualizer = this.model2Visualizer.build(this._dataProvider);
    if (this._visualizer) {
      return of(this._visualizer);
    }
    return throwError('Invalid visualizer');
  }

  get dataProvider(): [] {
    return this._dataProvider;
  }

}
