import { Component, inject, Input, ViewChild } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchComponent } from '../../../../../common/search/search.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RibbonComponent } from '../../../../../common/ribbon/ribbon.component';
import { ButtonComponent } from '../../../../../common/button/button.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PersonDetailsComponent } from '../../../../../common/person-details/person-details.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../../../../../common/confirmation/confirmation.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    RibbonComponent,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    SearchComponent,
    ButtonComponent,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  name: string = 'Deepak Jose';
  location: string = 'Kochi';
  cardDetails = [
    {
      name: 'Operations Managers',
      value: '5',
      type: 1,
    },
    {
      name: 'Agent Admins',
      value: '15',
      type: 1,
    },
    {
      name: 'TCAs',
      value: '200',
      type: 1,
    },
    {
      name: 'Total Amount',
      value: '2500$',
      type: 2,
    },
  ];

  tableData = new MatTableDataSource([
    { id: 1, name: 'Alan', zone: 'Zone 1' },
    { id: 2, name: 'Don', zone: 'Zone 2' },
    { id: 3, name: 'George', zone: 'Zone 3' },
    { id: 4, name: 'Tojo', zone: 'Zone 4' },
    { id: 5, name: 'Jerin', zone: 'Zone 5' },
  ]);
  standsList = [
    {
      id: 1,
      name: 'Stand 1',
    },
    {
      id: 2,
      name: 'Stand 2',
    },
    {
      id: 3,
      name: 'Stand 3',
    },
  ];
  displayedColumns = ['#', 'name', 'zone', 'actions'];
  @ViewChild('paginator1') paginator1!: MatPaginator;
  dialog = inject(Dialog);

  constructor(private matDialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.tableData.paginator = this.paginator1;
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
