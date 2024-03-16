import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActionMode, Superhero } from '../../models/superhero.interface';

export interface SuperheroFormDialogData {
  superhero: Superhero;
  mode: string;
}

@Component({
  selector: 'app-superhero-form-dialog',
  templateUrl: './superhero-form-dialog.component.html',
  styleUrls: ['./superhero-form-dialog.component.scss'],
})
export class SuperheroFormDialogComponent {
  mode: string;
  superheroForm: FormGroup;
  readonly actionMode = ActionMode;

  constructor(
    public dialogRef: MatDialogRef<SuperheroFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SuperheroFormDialogData,
    private fb: FormBuilder
  ) {
    this.mode = data.mode;
    this.superheroForm = this.fb.group({
      name: [this.data.superhero.name ?? '', Validators.required],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submitForm(): void {
    if (this.superheroForm.valid) {
      const superhero: Superhero = {
        id: this.data.superhero?.id,
        ...this.superheroForm.getRawValue(),
      };
      this.dialogRef.close(superhero);
    }
  }
}
