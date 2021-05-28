import { from } from 'rxjs';
import { Routes } from '@angular/router';
import { MenuBarComponent } from '../component/menuBar/menuBar.component';
import { MenuInfoComponent } from '../component/menuInfo/menuInfo.component';

import { AccLevelComponent } from './accLevel/accLevel.component';
import { SummaryComponent } from './summary/summary.component';
import { AccListViewComponent } from './accListView/AccListView.component';
export const PagesDeclarations = [
  MenuInfoComponent,
  MenuBarComponent,
  SummaryComponent,
  AccListViewComponent,
  AccLevelComponent
];
export const PagesEntryDeclarations = [];
