import { Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';

export const titlePaths = {
  Title: 'title',
  Summary: 'summary'
};
export const pagesRouts: Routes = [
  {
    path: titlePaths.Title,
    outlet: 'processrout'
  },
  {
    path: titlePaths.Summary,
    component: SummaryComponent,
    outlet: 'processrout'
  }
];
