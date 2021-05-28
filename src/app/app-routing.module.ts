import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pagesRouts } from './pages/pages_routes';

import { AccLevelComponent } from './pages/accLevel/accLevel.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { AccListViewComponent } from './pages/accListView/AccListView.component';
// add

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'accListView', component: AccListViewComponent },
  { path: 'accLevel', component: AccLevelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
