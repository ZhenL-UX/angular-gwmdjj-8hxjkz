import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
interface Region {
  name: string;
  code: string;
}
@Component({
  selector: 'app-accLevel',
  templateUrl: './accLevel.component.html',
  styleUrls: ['./accLevel.component.css']
})
export class AccLevelComponent implements OnInit {
  // dropdown
  region: Region[];
  selectedRegion: Region;

  // table
  vehicleInfoData: any[];
  customerInfoData: any[];
  accBalanceData: any[];
  contractInfoData: any[];
  accStatusData: any[];

  titelInfoData: any[];
  titleVenTracAttData: any[];
  auctionInfoData: any[];
  repoTraAttData: any[];

  accConditionsData: any[];
  alertsData: any[];
  eventLogData: any[];

  daybreakCommentsData: any[];
  accNotesData: any[];

  //radio
  val1: string;

  //checkbox
  selectedAdd: any[];

  // calendar
  promiseDate: Date;
  followUpDate: Date;
  constructor(private router: Router) {
    // dropdown
    this.region = [
      { name: '11104252', code: '' },
      { name: '11104253', code: '' },
      { name: '11104254', code: '' },
      { name: '11104255', code: '' },
      { name: '11104256', code: '' }
    ];
  }
  ngAfterViewInit() {
    document
      .getElementById('dropdown-account')
      .getElementsByTagName('span')[0]
      .setAttribute('style', 'color:#5b62b3;font-weight:600;font-size:16px');
  }
  ngOnInit() {
    // table
    this.vehicleInfoData = [
      {
        key: 'Year :',
        value: '2005'
      },
      {
        key: 'Make :',
        value: 'NISSAN'
      },
      {
        key: 'Model :',
        value: 'FRONTIER KING CAB-V6'
      },
      {
        key: 'VIN :',
        value: ''
      },
      {
        key: 'Origination Mileage :',
        value: '170,898'
      },
      {
        key: 'Auto IMS Color :',
        value: 'GREEN'
      },
      {
        key: 'Auto IMS Plate# :',
        value: '0'
      },
      {
        key: 'Auto IMS Fuel Type :',
        value: '6-CYLINDER GAS'
      },
      {
        key: 'Auto IMS Current Mileage :',
        value: '180115'
      }
    ];
    this.customerInfoData = [
      {
        key: 'Customer Name :',
        value: 'ROBERT WINNICK'
      },
      {
        key: 'Address :',
        value: '1385 MACOPIN RD WEST MILFORD, NJ 07480'
      },
      {
        key: 'Phone :',
        value: '323-682-8495'
      }
    ];
    this.accBalanceData = [
      {
        key: "Today's Payoff :",
        value: '$ 0.00 '
      },
      {
        key: 'LC Due :',
        value: '$ 0.00 '
      },
      {
        key: 'NSF Due :',
        value: '$ 0.00 '
      },
      {
        key: 'Other Due :',
        value: '$ 0.00 '
      },
      {
        key: 'Total Due :',
        value: '$ 0.00 '
      },
      {
        key: 'Deficiency Balance :',
        value: '$ 0.00 '
      }
    ];
    this.contractInfoData = [
      {
        key: 'Company :',
        value: 'WESTLAKE FINANCIAL '
      },
      {
        key: 'Product :',
        value: 'STAN'
      },
      {
        key: 'Amt Financed :',
        value: '$ 6,817.56  '
      },
      {
        key: 'Down Payment :',
        value: '$ 1,500.00 '
      },
      {
        key: 'Contract Date :',
        value: '4/16/2019'
      },
      {
        key: 'Active Date :',
        value: '4/16/2019'
      }
    ];
    this.accStatusData = [
      {
        key: 'Status :',
        value: 'CHGOFF'
      },
      {
        key: 'DQ :',
        value: '0'
      },
      {
        key: 'Due Date :',
        value: '4/27/2014'
      },
      {
        key: 'Current Payment Amt :',
        value: '$ 300.74 '
      },
      {
        key: 'Terms :',
        value: '28/39'
      }
    ];

    this.titelInfoData = [
      {
        key: 'Title Status :',
        value: 'Paper Title'
      },
      {
        key: 'Title Recieved Date :',
        value: '2/1/2020'
      },
      {
        key: 'Title State :',
        value: 'NJ'
      },
      {
        key: 'Title Number :',
        value: '0'
      }
    ];
    this.titleVenTracAttData = [
      {
        key: 'Title Stage :',
        value: 'Repo Title Applied'
      },
      {
        key: 'Repo Title Status :',
        value: 'Error, Need Review'
      },
      {
        key: 'Repo Title Venfor :',
        value: 'WOLTERS KLUWER'
      },
      {
        key: 'Repo Title Applied Date :',
        value: '07/08/2020'
      },
      {
        key: 'Repo Title Request State :',
        value: 'CA'
      },
      {
        key: 'Repo Title Request Age :',
        value: '7'
      },
      {
        key: 'Repo Title ETA Date :',
        value: '07/08/2020'
      },
      {
        key: 'Repo Title Completion Date :',
        value: '07/08/2020'
      },
      {
        key: 'Sent to Auction Date :',
        value: '07/08/1900'
      },
      {
        key: 'Sent to Auction Trking Number :',
        value: 'DASDSADASA'
      },
      {
        key: 'AutoIMS Title Staus :',
        value: 'Pending'
      }
    ];
    this.auctionInfoData = [
      {
        key: 'Name :',
        value: 'MANHEIM NY METRO SKYLINE'
      },
      {
        key: 'Address :',
        value: ''
      },
      {
        key: 'City :',
        value: ''
      },
      {
        key: 'State :',
        value: 'NJ'
      },
      {
        key: 'Zip :',
        value: '07004'
      },
      {
        key: 'Phone Number :',
        value: ''
      },
      {
        key: 'Email Address :',
        value: ''
      }
    ];
    this.repoTraAttData = [
      {
        key: 'Reposession Date :',
        value: '6/24/2020'
      },
      {
        key: 'Reposession Agent :',
        value: 'Elite Collateral Recovery Inc'
      },
      {
        key: 'Reposession Address :',
        value: '1385 MACOPIN RD'
      },
      {
        key: 'Reposession City :',
        value: 'WEST MILFORD'
      },
      {
        key: 'Reposession State :',
        value: 'NJ'
      },
      {
        key: 'Reposession Zip :',
        value: '07480'
      },
      {
        key: 'RDN PD Name :',
        value: 'West Milford Police Dept'
      },
      {
        key: 'RND PD Address :',
        value: '1480 Union Valley Rd West Milford NJ 07480'
      }
    ];

    this.accConditionsData = [
      {
        condition: 'E-OSCAR QUEUE',
        startDate: '1/16/2020',
        followupDate: '1/16/2020'
      },
      {
        condition: 'TITLE RELEASE ON HOLD (MISSING DELIVERY ADDRESS)',
        startDate: '1/16/2020',
        followupDate: '1/16/2020'
      },
      {
        condition: 'REPOSESSED',
        startDate: '1/16/2020',
        followupDate: '1/16/2020'
      },

      {
        condition: 'WAITING FOR TITLE',
        startDate: '1/16/2020',
        followupDate: '1/16/2020'
      },
      {
        condition: 'TITLE RELEASE ON HOLD',
        startDate: '1/16/2020',
        followupDate: '1/16/2020'
      }
    ];
    this.alertsData = [
      {
        comment: 'aaaaaaaaaaaaaaaaaaa'
      },
      {
        comment: 'bbbbbbbbbbbbbbb'
      },
      {
        comment: 'bbbb'
      },
      {
        comment: 'vvvvvvvvvvvvvvvvv'
      },
      {
        comment: 'dddddddddddddddddddddd'
      },
      {
        comment: 'ssssssssssssssssssssssssss'
      },
      {
        comment: 'fffffffffffffff'
      },
      {
        comment: 'ggggggggg'
      }
    ];
    this.eventLogData = [
      {
        createdOn: 'gggggggggg',
        createdBy: 'eeeeeeeeeee',
        event: 'bbbbbbb'
      },
      {
        createdOn: '2222222222',
        createdBy: 'ttttttttttttttttttt',
        event: 'mmmmmmmmmm'
      },
      {
        createdOn: 'yyyyyyyyyyyyyyy',
        createdBy: 'uuuuuu',
        event: 'vvvvvvvvv'
      },
      {
        createdOn: 'qqqqqqqqqqqqqq',
        createdBy: 'ww',
        event: 'dd'
      },
      {
        createdOn: 'ddddddd',
        createdBy: 'dddd',
        event: 'fffffffff'
      },
      {
        createdOn: 'gggggggggg',
        createdBy: 'eeeeeeeeeee',
        event: 'bbbbbbb'
      },
      {
        createdOn: 'qqqqqq',
        createdBy: 'hhhhhhhhhhh',
        event: 'vvvvvvvvvvvv'
      },
      {
        createdOn: '2222222222',
        createdBy: 'ttttttttttttttttttt',
        event: 'mmmmmmmmmm'
      },
      {
        createdOn: 'yyyyyyyyyyyyyyy',
        createdBy: 'uuuuuu',
        event: 'vvvvvvvvv'
      },
      {
        createdOn: 'gggggggggg',
        createdBy: 'eeeeeeeeeee',
        event: 'bbbbbbb'
      },
      {
        createdOn: 'qqqqqq',
        createdBy: 'hhhhhhhhhhh',
        event: 'vvvvvvvvvvvv'
      },
      {
        createdOn: '2222222222',
        createdBy: 'ttttttttttttttttttt',
        event: 'mmmmmmmmmm'
      },
      {
        createdOn: 'yyyyyyyyyyyyyyy',
        createdBy: 'uuuuuu',
        event: 'vvvvvvvvv'
      },
      {
        createdOn: '2222222222',
        createdBy: 'ttttttttttttttttttt',
        event: 'mmmmmmmmmm'
      },
      {
        createdOn: 'yyyyyyyyyyyyyyy',
        createdBy: 'uuuuuu',
        event: 'vvvvvvvvv'
      }
    ];

    this.daybreakCommentsData = [
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Robot',
        comment: 'Title status change. Title released [From:Title auto release]'
      }
    ];
    this.accNotesData = [
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'ROVD EMAIL FROM KARISSA WITH FFT THAT SHE ROVD THE POA FOR OST AND WANTED TO SEE WHAT THE LIEN DATE HAS TO BE. ADVISED HER HAS TO BE 2/21/2017. '
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'ROVD EMAIL FROM KARISSA WITH FFT THAT SHE ROVD THE POA FOR OST AND WANTED TO SEE WHAT THE LIEN DATE HAS TO BE. ADVISED HER HAS TO BE 2/21/2017. '
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'File Resolution: CLS,LIEN CONFIRMED AND ELT MATCHED 05/11/2018.'
      },
      {
        createdOn: '1/24/2020 19:29:28',
        createdBy: 'Edavalos',
        type: 'DC',
        message:
          'ROVD EMAIL FROM KARISSA WITH FFT THAT SHE ROVD THE POA FOR OST AND WANTED TO SEE WHAT THE LIEN DATE HAS TO BE. ADVISED HER HAS TO BE 2/21/2017. '
      }
    ];
  }

  backButtonClick() {
    const navigationExtras: NavigationExtras = {
      queryParams: {},
      skipLocationChange: true
    };
    this.router.navigate(['/accListView'], navigationExtras);
  }
}
