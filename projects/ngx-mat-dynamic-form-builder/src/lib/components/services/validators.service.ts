import { Injectable } from '@angular/core';
import { Validators, ValidatorFn } from '@angular/forms';

export interface ValidatorObject {
  name: string;
  validators: ValidatorFn[]
}

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  validators: ValidatorObject[] = [
    {
      name: 'required',
      validators: [
        Validators.required
      ]
    },
    {
      name: 'integer',
      validators: [
        Validators.pattern(/^[0-9]*$/)
      ]
    },
    {
      name: 'positiveInteger',
      validators: [
        Validators.min(0),
        Validators.pattern(/^[0-9]*$/)
      ]
    },
    {
      name: 'string',
      validators: [
        Validators.pattern(/^[A-Za-z]+$/)
      ]
    }
  ]

  constructor() { }

  getValidator(validator: ValidatorObject) {

    // console.log(this.validators['positiveInteger']);

  }


}

