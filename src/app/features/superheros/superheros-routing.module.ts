import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperherosComponent } from './pages/hero-list/superheros.component';
import { SuperheroDetailComponent } from './pages/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SuperherosComponent,
  },
  { path: 'hero/:id', component: SuperheroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperherosRoutingModule {}
