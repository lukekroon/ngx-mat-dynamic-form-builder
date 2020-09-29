import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { isString } from 'lodash';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'ngx-mat-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit, OnChanges {

  @Input() options: any[] = [];
  // Default selected options (array of selection keys)
  @Input() defaultOption: any[];
  @Input() defaultOptionKey: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() displayKey: string;
  // If filterKey not specified defaults to displayKey value
  @Input() filterKey: string;
  @Input() hint: string = '';
  @Input() appearance: string = 'standard';
  @Input() disabled: boolean = false;
  @Input() autoClear: boolean = false;

  @Input() validators: ValidatorFn[];

  @Output() output = new EventEmitter<any>();

  stateCtrl: FormControl;
  filteredOptions: Observable<any[]>;

  constructor() { }

  ngOnInit(): void {
    this.setupValidators();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options && this.options) {

      if (!this.stateCtrl)
        this.setupValidators();

      this.filteredOptions = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(state => state ? this._filterOptions(state) : this.options.slice())
        );
      if (this.defaultOption && this.defaultOptionKey) {
        this.stateCtrl.setValue(this.options.find(o => o[this.defaultOptionKey] === this.defaultOption));
      }
    }
  }

  setupValidators(): void {
    if (this.stateCtrl)
      return;

    if (this.validators) {
      let isRequired = false;
      this.validators.forEach(vd => {
        if (vd.name === 'required')
          isRequired = true;
      });
      if (isRequired) {
        this.stateCtrl = new FormControl(null, [Validators.required, this.valueSelected()]);
      } else {
        this.stateCtrl = new FormControl(null, [this.valueSelected()]);
      }
    } else {
      this.stateCtrl = new FormControl(null, [this.valueSelected()]);
    }
  }

  displayFn(value: any): any {
    if (value) return value[this.displayKey];
  }

  setValue(event: MatAutocompleteSelectedEvent): void {
    this.output.emit(event.option.value);
    if (this.autoClear) {
      this.stateCtrl.reset();
    }
  }

  clearValue(): void {
    this.output.emit(undefined);
    this.stateCtrl.reset();
  }

  private _filterOptions(value: string): any[] {
    if (isString(value) && value.length >= 1) {
      const filterValue = value.toLowerCase();
      return this.options.filter(state => state[this.filterKey ? this.filterKey : this.displayKey].toLowerCase().includes(filterValue));
    }
    return this.options;
  }

  private valueSelected(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      // if value is set and it is not an object, valid option not selected
      if (c.value && typeof c.value !== 'object') {
        return { match: true };
      } else {
        return null;
      }
    };
  }

}
