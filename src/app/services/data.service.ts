import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getRegions(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'Gauteng',
        size: 4566
      }, {
        id: 2,
        name: 'Limpopo',
        size: 9956
      }, {
        id: 3,
        name: 'Mpumalanga',
        size: 1125
      }, {
        id: 4,
        name: 'Freestate',
        size: 5522
      }
    ]).pipe(delay(1000));
  }

  getCities(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'Johannesburg',
        regionId: 1
      }, {
        id: 2,
        name: 'Pretoria',
        regionId: 1
      }, {
        id: 3,
        name: 'Nelspruit',
        regionId: 3
      }, {
        id: 4,
        name: 'Bloemfontein',
        regionId: 4
      }
    ]).pipe(delay(1000));
  }

  getCitiesByRegion(regionId: number): Observable<any> {
    return this.getCities().pipe(
      map(c => c.filter(v => v.regionId === regionId))
    )
  }

  getCategories(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'Leisure'
      }, {
        id: 2,
        name: 'Camping'
      }, {
        id: 3,
        name: 'Watersports'
      }, {
        id: 4,
        name: 'Running'
      }
    ]).pipe(delay(1000));
  }

  getRetailer(): Observable<any> {
    return of([
      {
        id: 1,
        name: 'Cape Union Mart'
      }, {
        id: 2,
        name: 'Safari and Outdoor'
      }
    ]).pipe(delay(1000));
  }


}
