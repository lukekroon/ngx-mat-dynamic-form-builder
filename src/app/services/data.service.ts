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
      id: 'njr28j82je2i',
      area: 'Gauteng',
      size: 4566
    }, {
      id: 'srgsdrfg34r4',
      area: 'Limpopo',
      size: 9956
    }, {
      id: 'sghsdrh434',
      area: 'Mpumalanga',
      size: 1125
    }, {
      id: '23r23rffg',
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
