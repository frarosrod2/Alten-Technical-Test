import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionMode, Superhero } from '../../models/superhero.interface';

@Component({
  selector: 'actions-buttons',
  templateUrl: './actions-buttons.component.html',
  styleUrls: ['./actions-buttons.component.scss'],
})
export class ActionsButtonsComponent {
  @Output() openSuperheroEvent = new EventEmitter<{
    mode: ActionMode;
    superhero: Superhero;
  }>();
  @Output() deleteSuperheroEvent = new EventEmitter<Superhero>();
  @Input()
  superhero!: Superhero;

  readonly actionMode = ActionMode;
}
