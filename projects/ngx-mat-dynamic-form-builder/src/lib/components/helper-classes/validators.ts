import { Validators, ValidatorFn, Validator } from '@angular/forms';

export interface Valids {
    name: string;
    validators: ValidatorFn[]
}
// @dynamic
export class FormValidators {

    private static validators = [
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
            name: 'positiveNumber',
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

    static get(validatorString: string): ValidatorFn[] {
        const validator = this.validators.find(v => v.name === validatorString);
        return validator ? validator.validators : [];
    }

}