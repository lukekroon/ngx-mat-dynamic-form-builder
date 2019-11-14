import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  options: any[] = [
    {
      id: '1',
      area: 'Gauteng',
      size: 4566
    }, {
      id: '2',
      area: 'Limpopo',
      size: 9956
    }, {
      id: '3',
      area: 'Mpumalanga',
      size: 1125
    }, {
      id: '4',
      area: 'Freestate',
      size: 5522
    }
  ];

  getOptionsObservable(): Observable<any> {
    return of(this.options).pipe(delay(3000));
  }

  getOptions(): any {
    return this.options;
  }

}
