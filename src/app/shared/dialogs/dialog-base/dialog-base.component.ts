import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogBaseData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-dialog-base',
  templateUrl: './dialog-base.component.html',
  styleUrls: ['./dialog-base.component.scss'],
})
export class DialogBaseComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogBaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogBaseData
  ) {}
}
