import { EventEmitter, Injectable } from '@angular/core';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { JsonEvent } from '../model/json-event';
import { Visualizer } from '../model/visualizer';
import { Model2VisualizerService } from './model2-visualizer.service';

@Injectable({
  providedIn: 'root'
})
export class UiSupportService {

  private _visualizer: Visualizer;
  private _dataProvider: any;
  private _text: string;

  private _jsonEventEmitter: EventEmitter<JsonEvent>;

  constructor(private model2Visualizer: Model2VisualizerService, private _snackBar: MatSnackBar, private router: Router) {
    this._jsonEventEmitter = new EventEmitter<JsonEvent>();

    this._jsonEventEmitter.subscribe(
      event => {
        if (event.error) {
          this._snackBar.open(event.error.message, undefined, {
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          return;
        }
        this._snackBar.dismiss();
      }
    )
  }

  get jsonEventEmitter(): EventEmitter<JsonEvent> {
    return this._jsonEventEmitter;
  }

  get visualizer(): Visualizer {
    return this._visualizer;
  }

  sendText(json: string) {
    const jsonEvent: JsonEvent = new JsonEvent;

    try {
      if (!json || json.length === 0) {
        throw new Error('Empty json input');
      }

      this._dataProvider = JSON.parse(json);

      if (!Array.isArray(this._dataProvider)) {
        this._dataProvider = [ this._dataProvider ];
      }

      this._text = json;

      this.router.navigate(['table']);

      this._jsonEventEmitter.emit(jsonEvent);

    } catch (error) {
      jsonEvent.error = error;
      this._jsonEventEmitter.emit(jsonEvent);
    }
  }

  get textInput(): string {
    return this._text;
  }

  set textInput(text: string) {
    this._text = text;
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
