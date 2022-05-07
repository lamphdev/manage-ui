import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SeriesUpdateComponent } from './pages/series-update/series-update.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesListComponent
  },
  {
    path: 'create',
    component: SeriesUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
