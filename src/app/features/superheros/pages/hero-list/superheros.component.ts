import { DialogBaseData } from '../../../../shared/dialogs/dialog-base/dialog-base.component';
import {
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { SuperherosService } from '../../services/superheros.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBaseComponent } from 'src/app/shared/dialogs/dialog-base/dialog-base.component';
import { ActionMode, Superhero } from '../../models/superhero.interface';
import {
  SuperheroFormDialogComponent,
  SuperheroFormDialogData,
} from '../../components/superhero-form-dialog/superhero-form-dialog.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-superheros',
  templateUrl: './superheros.component.html',
  styleUrls: ['./superheros.component.scss'],
})
export class SuperherosComponent implements AfterViewInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  superheroes = new MatTableDataSource<Superhero>([]);
  columns = ['name', 'actions'];
  readonly actionMode = ActionMode;

  constructor(
    private superherosService: SuperherosService,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.superheroes.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllSuperheroes();
  }

  getAllSuperheroes(): void {
    console.log(this.superherosService.superheroes);
    this.superheroes.data = this.superherosService.superheroes;
  }

  searchSuperheroes(searchEvent: Event): void {
    const searchTerm = (searchEvent.target as HTMLInputElement).value;
    if (searchTerm.trim() !== '') {
      this.superheroes.data =
        this.superherosService.searchSuperheroesByName(searchTerm);
    } else {
      this.getAllSuperheroes();
    }
  }

  openSuperheroDialog({
    mode,
    superhero,
  }: {
    mode: string;
    superhero?: Superhero;
  }): void {
    const dialogRef = this.dialog.open(SuperheroFormDialogComponent, {
      width: '400px',
      data: { mode, superhero } as SuperheroFormDialogData,
    });
    dialogRef.afterClosed().subscribe((dialogSuperhero) => {
      if (dialogSuperhero) {
        if (mode === this.actionMode.CREATE) {
          this.superherosService.createSuperhero(dialogSuperhero);
          this.getAllSuperheroes();
        } else if (mode === this.actionMode.EDIT) {
          this.superherosService.updateSuperhero(dialogSuperhero);
          this.getAllSuperheroes();
        }
        this.table.renderRows();
      }
    });
  }

  deleteSuperhero(superhero: Superhero): void {
    this.dialog
      .open(DialogBaseComponent, {
        data: {
          title: 'Borrar superheroe',
          description: `¿Está seguro de que desea eliminar el superheroe ${superhero.name}?`,
        } as DialogBaseData,
        width: '250px',
      })
      .afterClosed()
      .subscribe((result) => {
        console.log({ result });
        if (result) {
          this.superherosService.deleteSuperhero(superhero.id);
          this.getAllSuperheroes();
        }
      });
  }
}
