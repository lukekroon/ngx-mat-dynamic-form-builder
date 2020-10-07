import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-mat-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() buttonType: 'button' | 'icon';
  @Input() prefixIcon: string;
  @Input() suffixIcon: string;
  @Input() label: string;
  @Input() color: string;

  @Output() file = new EventEmitter<File>();

  fileSelected: File;

  constructor() { }

  ngOnInit(): void {
  }

  processFile(event: Event) {
    this.fileSelected = (event.target as HTMLInputElement).files[0];
    this.file.emit(this.fileSelected);
  }

}
