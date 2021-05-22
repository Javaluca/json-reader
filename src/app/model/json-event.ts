export class JsonEvent {

  private _error: Error;

  constructor() {

  }

  set error(error: Error) {
    this._error = error;
  }

  get error(): Error {
    return this._error;
  }
}
