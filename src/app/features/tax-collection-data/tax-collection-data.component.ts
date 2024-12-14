import { Component, inject, ViewChild } from '@angular/core';
import { RibbonComponent } from '../../common/ribbon/ribbon.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchComponent } from '../../common/search/search.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { PersonDetailsComponent } from '../../common/person-details/person-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonComponent } from '../../common/button/button.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../../common/confirmation/confirmation.component';
@Component({
  selector: 'app-tax-collection-data',
  standalone: true,
  imports: [
    RibbonComponent,
    MatPaginatorModule,
    MatSelectModule,
    ButtonComponent,
    CommonModule,
    MatFormFieldModule,
    MatTabsModule,
    SearchComponent,
    DialogModule,
    MatTableModule,
    MatMenuModule,
  ],
  templateUrl: './tax-collection-data.component.html',
  styleUrl: './tax-collection-data.component.scss',
})
export class TaxCollectionDataComponent {
  name: string = 'Deepak Jose';
  location: string = 'Kochi';
  dialog = inject(Dialog);
  standsList = [
    {
    id:1,
    name:'Stand 1'
  },
  {
    id:2,
    name:'Stand 2'
  },
  {
    id:3,
    name:'Stand 3'
  }
]
 cardDetails = [
  {
    name: 'RIBBON_DATA_TITLE.TOTAL_STANDS',
    value: '5',
    type: 1,
  },
  {
    name: 'RIBBON_DATA_TITLE.TOTAL_TICKETS',
    value: '25',
    type: 3,
  },
  {
    name: 'RIBBON_DATA_TITLE.TOTAL_COLLECTION',
    value: '2500',
    type: 2,
  },
];

  taxCollectionData = new MatTableDataSource([
    {
      stand: 'Stand 1',
      agent: 'Deepak',
      contact: 'xxxxxx',
      tickets: 12,
      actualAmount: '1200',
      collectedAmount: '1200',
      difference: 0,
      actions: {
        approve: true,
        reject: false,
      },
    },
    {
      stand: 'Stand 2',
      agent: 'Abin',
      contact: 'xxxxxx',
      tickets: 10,
      actualAmount: '1000',
      collectedAmount: '1000',
      difference: 0,
      actions: {
        approve: true,
        reject: false,
      },
    },
    {
      stand: 'Stand 3',
      agent: 'Anandhu',
      contact: 'xxxxxx',
      tickets: 30,
      actualAmount: '3000',
      collectedAmount: '2000',
      difference: '1000',
      actions: {
        approve: true,
        reject: false,
      },
    },
    {
      stand: 'Stand 4',
      agent: 'Krishnana',
      contact: 'xxxxxx',
      tickets: 45,
      actualAmount: '4500',
      collectedAmount: '4500',
      difference: 0,
      actions: {
        approve: true,
        reject: false,
      },
    },
    {
      stand: 'Stand 5',
      agent: 'Unni',
      contact: 'xxxxxx',
      tickets: 50,
      actualAmount: '5000',
      collectedAmount: '5000',
      difference: 0,
      actions: {
        approve: true,
        reject: false,
      },
    },
  ]);
  displayedColumns = [
    '#',
    'stand',
    'agent',
    'contact',
    'tickets',
    'actualAmount',
    'collectedAmount',
    'difference',
    'actions',
  ];

  @ViewChild('paginator1') paginator1!: MatPaginator;

  constructor(private matDialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.taxCollectionData.paginator = this.paginator1;
  }
  openPersonDeatilsDialog(data: any) {
    this.dialog.open(PersonDetailsComponent, {
      minWidth: '300px',
      data: data,
    });
  }

  openRejectConfirm(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.matDialog.open(ConfirmationComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: { type: 'reject' },
    });
  }
}
