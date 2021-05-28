import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Summary } from '../domains/summary';
interface Region {
  name: string;
  code: string;
}
interface SearchTerm {
  name: string;
  code: string;
}
@Component({
  selector: 'app-accListView',
  templateUrl: './accListView.component.html',
  styleUrls: ['./accListView.component.css']
})
export class AccListViewComponent implements OnInit {
  // dropdown
  region: Region[];
  selectedRegion: Region;

  searchTerm: SelectItem[];
  selectedSearchTerm: SearchTerm[];

  // table
  tableData: any[];
  //pagnior
  listParam: Summary = new Summary();
  constructor(private router: Router) {
    // dropdown
    this.searchTerm = [
      { label: 'Account Number', value: '' },
      { label: 'VIN', value: '' }
    ];
    this.region = [
      { name: 'WEST', code: '' },
      { name: 'PACIFIC', code: '' },
      { name: 'MIDWEST', code: '' },
      { name: 'N EAST', code: '' },
      { name: 'S EAST', code: '' }
    ];
  }
  ngAfterViewInit() {
    document
      .getElementById('dropdown-region2')
      .getElementsByTagName('span')[0]
      .setAttribute('style', 'color:#ffffff');
    document
      .getElementById('dropdown-region2')
      .getElementsByTagName('span')[1]
      .setAttribute('style', 'color:#ffffff');
    document
      .getElementById('dropdown-region2')
      .getElementsByTagName('div')[3]
      .setAttribute('style', 'background:#5b62b3');
  }
  ngOnInit() {
    // table
    this.tableData = [
      {
        account: '11104252',
        region: 'WEST',
        auction: 'IAA Sacramento',
        age: '120',
        year: '2017',
        make: 'TOYOTA',
        model: 'COROLLA',
        vin: '5YFBURHE0HP717937',
        titleType: 'PTI',
        alerts: 'Problem Hold',
        alertDate: '6/1/2020',
        titleStage: '1PTI Requested from DT',
        stageDate: '6/1/2020',
        lastNoteDate: '6/1/2020',
        lastNote: 'Printed Title'
      },
      {
        account: '11104252',
        region: 'WEST',
        auction: 'IAA Sacramento',
        age: '120',
        year: '2017',
        make: 'TOYOTA',
        model: 'COROLLA',
        vin: '5YFBURHE0HP717937',
        titleType: 'PTI',
        alerts: 'Problem Hold',
        alertDate: '6/1/2020',
        titleStage: '1PTI Requested from DT',
        stageDate: '6/1/2020',
        lastNoteDate: '6/1/2020',
        lastNote: 'Printed Title'
      },
      {
        account: '11104252',
        region: 'WEST',
        auction: 'IAA Sacramento',
        age: '120',
        year: '2017',
        make: 'TOYOTA',
        model: 'COROLLA',
        vin: '5YFBURHE0HP717937',
        titleType: 'PTI',
        alerts: 'Problem Hold',
        alertDate: '6/1/2020',
        titleStage: '1PTI Requested from DT',
        stageDate: '6/1/2020',
        lastNoteDate: '6/1/2020',
        lastNote: 'Printed Title'
      },
      {
        account: '11104252',
        region: 'WEST',
        auction: 'IAA Sacramento',
        age: '120',
        year: '2017',
        make: 'TOYOTA',
        model: 'COROLLA',
        vin: '5YFBURHE0HP717937',
        titleType: 'PTI',
        alerts: 'Problem Hold',
        alertDate: '6/1/2020',
        titleStage: '1PTI Requested from DT',
        stageDate: '6/1/2020',
        lastNoteDate: '6/1/2020',
        lastNote: 'Printed Title'
      },
      {
        account: '11104252',
        region: 'WEST',
        auction: 'IAA Sacramento',
        age: '120',
        year: '2017',
        make: 'TOYOTA',
        model: 'COROLLA',
        vin: '5YFBURHE0HP717937',
        titleType: 'PTI',
        alerts: 'Problem Hold',
        alertDate: '6/1/2020',
        titleStage: '1PTI Requested from DT',
        stageDate: '6/1/2020',
        lastNoteDate: '6/1/2020',
        lastNote: 'Printed Title'
      },
      {
        account: '11104252',
        region: 'WEST',
        auction: 'IAA Sacramento',
        age: '120',
        year: '2017',
        make: 'TOYOTA',
        model: 'COROLLA',
        vin: '5YFBURHE0HP717937',
        titleType: 'PTI',
        alerts: 'Problem Hold',
        alertDate: '6/1/2020',
        titleStage: '1PTI Requested from DT',
        stageDate: '6/1/2020',
        lastNoteDate: '6/1/2020',
        lastNote: 'Printed Title'
      },
      {
        account: '11104252',
        region: 'WEST',
        auction: 'IAA Sacramento',
        age: '120',
        year: '2017',
        make: 'TOYOTA',
        model: 'COROLLA',
        vin: '5YFBURHE0HP717937',
        titleType: 'PTI',
        alerts: 'Problem Hold',
        alertDate: '6/1/2020',
        titleStage: '1PTI Requested from DT',
        stageDate: '6/1/2020',
        lastNoteDate: '6/1/2020',
        lastNote: 'Printed Title'
      }
    ];
  }

  detailClick() {
    const navigationExtras: NavigationExtras = {
      queryParams: {},
      skipLocationChange: true,
      fragment: 'anchor'
    };
    this.router.navigate(['/accLevel'], navigationExtras);
  }

  backButtonClick() {
    const navigationExtras: NavigationExtras = {
      queryParams: {},
      skipLocationChange: true
    };
    this.router.navigate(['/summary'], navigationExtras);
  }

  /**
   * Paging option
   */
  paginate(event) {
    this.listParam.first = event.first;
    this.listParam.rows = event.rows;
  }
}
