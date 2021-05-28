import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipsModule } from 'primeng/chips';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { JsonPipe } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StepsModule } from 'primeng/steps';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
/**
 * Import Modules for PrimeNg
 */
export const PrimeNgImportModules = [
  PaginatorModule,
  ChartModule,
  DropdownModule,
  InputTextModule,
  PanelModule,
  MessagesModule,
  MessageModule,
  ButtonModule,
  MenubarModule,
  BlockUIModule,
  ProgressBarModule,
  ToastModule,
  DialogModule,
  ListboxModule,
  CalendarModule,
  DynamicDialogModule,
  InputTextareaModule,
  SelectButtonModule,
  KeyFilterModule,
  CardModule,
  TabViewModule,
  TableModule,
  InputSwitchModule,
  ChipsModule,
  ConfirmDialogModule,
  ProgressSpinnerModule,
  StepsModule,
  RadioButtonModule,
  ScrollPanelModule,
  CheckboxModule
];

/**
 * Import Services for PrimeNg
 */
export const PrimeNgImportServices = [
  MessageService,
  JsonPipe,
  ConfirmationService
];
