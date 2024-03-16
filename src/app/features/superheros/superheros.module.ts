import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperherosComponent } from './pages/hero-list/superheros.component';
import { SuperherosService } from './services/superheros.service';
import { SuperherosRoutingModule } from './superheros-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogBaseComponent } from '../../shared/dialogs/dialog-base/dialog-base.component';
import { SuperheroFormDialogComponent } from './components/superhero-form-dialog/superhero-form-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SuperheroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { ActionsButtonsComponent } from './components/actions-buttons/actions-buttons.component';

@NgModule({
  declarations: [
    SuperherosComponent,
    DialogBaseComponent,
    SuperheroFormDialogComponent,
    SuperheroDetailComponent,
    ActionsButtonsComponent,
  ],
  imports: [
    CommonModule,
    SuperherosRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [SuperherosService],
})
export class SuperherosModule {}
