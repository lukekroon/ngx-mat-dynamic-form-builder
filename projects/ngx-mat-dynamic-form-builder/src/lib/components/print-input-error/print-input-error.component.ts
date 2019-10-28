import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'print-input-error',
  templateUrl: './print-input-error.component.html',
  styleUrls: ['./print-input-error.component.css']
})
export class PrintInputErrorComponent {
  console = console;
  @Input("control")
  control: any;
}
