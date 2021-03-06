import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { isString } from 'lodash';

@Component({
  selector: 'ngx-mat-chip-selector',
  templateUrl: './chip-selector.component.html',
  styleUrls: ['./chip-selector.component.css']
})
export class ChipSelectorComponent implements OnInit, OnChanges {

  @Input() options: any[] = [];
  // Default selected options (array of selection keys)
  @Input() defaultOptions: any[];
  @Input() defaultOptionsKey: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() displayKey: string;
  // If filterKey not specified defaults to displayKey value
  @Input() filterKey: string;
  @Input() hint: string = "";
  @Input() appearance: string = 'standard';
  @Input() disabled: boolean = false;
  @Input() customChip: boolean = false;

  @Input() validators: ValidatorFn[];

  @Output() output = new EventEmitter<any[]>();

  formControl: FormControl;

  @ViewChild('formInput') formInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  visible = true;
  selectable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  filteredObjects: Observable<any[]>;
  selectedObjects: any[] = [];

  ngOnInit() {
    this.setupValidators();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options && this.options) {
      if (!this.formControl)
        this.setupValidators();

      this.filteredObjects = this.formControl.valueChanges.pipe(
        startWith([]),
        map((obj: string | null) => {
          return obj ? this._filter(obj) : this.options.slice()
        })
      );
      if (this.defaultOptions && this.defaultOptionsKey) {
        this.addDefaultSelected(this.defaultOptions);
      }
    }
  }

  setupValidators(): void {
    if (this.formControl)
      return;
    if (this.validators) {
      let isRequired = false;
      this.validators.forEach(vd => {
        if (vd.name === 'required')
          isRequired = true;
      });
      if (isRequired) {
        this.formControl = new FormControl(this.selectedObjects, [Validators.required, this.valueSelected()]);
      } else {
        this.formControl = new FormControl(this.selectedObjects, [this.valueSelected()]);
      }
    } else if (!this.customChip) {
      this.formControl = new FormControl(this.selectedObjects, [this.valueSelected()]);
    } else {
      this.formControl = new FormControl();
    }
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if (this.customChip && (value || '').trim()) {
        this.selectedObjects.push({ [this.displayKey]: value.trim() });
        this.output.emit(this.selectedObjects);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }
    }
    this.formControl.setValue(this.selectedObjects);
    this.formControl.updateValueAndValidity();
  }

  remove(item: string): void {
    this.updateFilteredObjects();

    const index = this.selectedObjects.indexOf(item);

    if (index >= 0) {
      this.selectedObjects.splice(index, 1);
      this.output.emit(this.selectedObjects);
    }
    this.formControl.updateValueAndValidity();

  }

  updateFilteredObjects() {
    this.filteredObjects = this.filteredObjects.pipe(
      map(data =>
        data.filter(obj => !this.selectedObjects.includes(obj))
      )
    )
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedObjects.push(event.option.value);
    this.output.emit(this.selectedObjects);

    this.updateFilteredObjects();
    this.formInput.nativeElement.value = '';
    this.formInput.nativeElement.blur();
    this.formControl.setValue(this.selectedObjects);
  }

  addDefaultSelected(values: any[]): void {
    if (!Array.isArray(values)) {
      console.error('Default values not an array');
      return;
    }
    this.selectedObjects = this.options.filter(i => values.some(t => t === i[this.defaultOptionsKey]));
    this.output.emit(this.selectedObjects);
    this.updateFilteredObjects();
    this.formControl.setValue(this.selectedObjects);
  }

  private _filter(value: string): string[] {
    if (isString(value) && value.length >= 1) {
      let filterValue = value.toLowerCase();

      return this.options.filter(obj => obj[this.filterKey ? this.filterKey : this.displayKey].
        toLowerCase().includes(filterValue));
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
