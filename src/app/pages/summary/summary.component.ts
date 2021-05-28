import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
interface Region {
  name: string;
  code: string;
}
interface SearchTerm {
  name: string;
  code: string;
}
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  // dropdown
  region: Region[];
  selectedRegion: Region;

  searchTerm: SelectItem[];
  selectedSearchTerm: SearchTerm[];

  // table
  age: any[];

  //chart
  data: any;
  hideBox: any;

  constructor(private router: Router) {
    // dropdown
    this.searchTerm = [
      { label: 'Account Number', value: '' },
      { label: 'VIN', value: '' }
    ];
    this.region = [
      { name: 'All', code: '' },
      { name: 'WEST', code: '' },
      { name: 'PACIFIC', code: '' },
      { name: 'MIDWEST', code: '' },
      { name: 'N EAST', code: '' },
      { name: 'S EAST', code: '' }
    ];

    this.hideBox = {
      legend: {
        display: false
      }
    };

    //chart
    this.data = {
      labels: ['WEST', 'PACIFIC', 'MIDWEST', 'N EAST', 'S EAST'],
      datasets: [
        {
          backgroundColor: '#5b62b3',
          borderColor: '#1E88E5',
          data: [32, 58, 45, 39, 35]
        }
      ]
    };
  }

  ngAfterViewInit() {
    document
      .getElementById('dropdown-region')
      .getElementsByTagName('span')[0]
      .setAttribute('style', 'color:#ffffff');
    document
      .getElementById('dropdown-region')
      .getElementsByTagName('span')[1]
      .setAttribute('style', 'color:#ffffff');
    document
      .getElementById('dropdown-region')
      .getElementsByTagName('div')[3]
      .setAttribute('style', 'background:#5b62b3');
  }
  ngOnInit() {
    // table
    this.age = [
      {
        ageBand: '1 to 30',
        west: '9',
        pacific: '1',
        midwest: '1',
        nEast: '3',
        sEast: '3',
        grandTotal: '18'
      },
      {
        ageBand: '31 to 60',
        west: '9',
        pacific: '1',
        midwest: '1',
        nEast: '3',
        sEast: '3',
        grandTotal: '18'
      },
      {
        ageBand: '61 to 90',
        west: '9',
        pacific: '1',
        midwest: '1',
        nEast: '3',
        sEast: '3',
        grandTotal: '18'
      },
      {
        ageBand: '91 to 120',
        west: '9',
        pacific: '1',
        midwest: '1',
        nEast: '3',
        sEast: '3',
        grandTotal: '18'
      },
      {
        ageBand: '120+',
        west: '9',
        pacific: '1',
        midwest: '1',
        nEast: '3',
        sEast: '3',
        grandTotal: '18'
      }
    ];
  }
  detailClick() {
    const navigationExtras: NavigationExtras = {
      queryParams: {},
      skipLocationChange: true,
      fragment: 'anchor'
    };
    this.router.navigate(['/accListView'], navigationExtras);
  }
}
