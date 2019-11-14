import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { isString } from 'lodash';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnChanges {

  @Input() options: any[] = [];
  // Default selected options (array of selection keys)
  @Input() defaultOption: any[];
  @Input() defaultOptionKey: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() displayKey: string;
  // If filterKey not specified defaults to displayKey value
  @Input() filterKey: string;
  @Input() hint: string = "";
  @Input() appearance: string = 'standard';

  @Input() validators: any;

  @Output() output = new EventEmitter<any>();

  stateCtrl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options && this.options) {
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

  displayFn(value: any): any {
    if (value) return value[this.displayKey];
  }

  setValue(event: MatAutocompleteSelectedEvent): void {
    this.output.emit(event.option.value);
  }

  private _filterOptions(value: string): any[] {
    if (isString(value) && value.length >= 1) {
      const filterValue = value.toLowerCase();
      return this.options.filter(state => state[this.filterKey ? this.filterKey : this.displayKey].toLowerCase().includes(filterValue));
    }
    return this.options;
  }

}
