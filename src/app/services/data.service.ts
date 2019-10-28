import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  options: any[] = [
    {
      key: 'key1',
      value: 'Option 1'
    }, {
      key: 'key2',
      value: 'Option 2'
    }, {
      key: 'key3',
      value: 'Option 3'
    }, {
      key: 'key4',
      value: 'Option 4'
    }, {
      key: 'key5',
      value: 'Option 5'
    }
  ];

  getOptionsObservable(): Observable<any> {
    return of(this.options);
  }

  getOptions(): any {
    return this.options;
  }
  
}
