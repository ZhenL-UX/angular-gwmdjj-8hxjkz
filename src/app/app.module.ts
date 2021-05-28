import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// add
import { MenuBarComponent } from './component/menuBar/menuBar.component';
import { MenuInfoComponent } from './component/menuInfo/menuInfo.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { PagesDeclarations } from './pages/pages.declarations';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {
  PrimeNgImportModules,
  PrimeNgImportServices
} from './primeng.import.modules';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { TreeTableModule } from 'primeng/treetable';

@NgModule({
  declarations: [
    // add
    AppComponent,
    MenuBarComponent,
    MenuInfoComponent,
    SummaryComponent,
    PagesDeclarations
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DialogModule,
    DynamicDialogModule,
    PaginatorModule,
    TreeTableModule,
    // add
    PrimeNgImportModules
  ],
  providers: [
    PrimeNgImportServices,
    MessageService,
    AppComponent
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
