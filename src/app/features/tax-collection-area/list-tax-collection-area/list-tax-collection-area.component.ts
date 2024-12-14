import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreateTaxCollectionAreaComponent } from '../create-tax-collection-area/create-tax-collection-area.component';
import { SearchComponent } from '../../../common/search/search.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ButtonComponent } from '../../../common/button/button.component';
import { PersonDetailsComponent } from '../../../common/person-details/person-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-list-tax-collection-area',
  standalone: true,
  imports: [
    MatTableModule,
    SearchComponent,
    MatPaginatorModule,
    ButtonComponent,
    MatSelectModule,
    DialogModule,
    MatFormFieldModule,
    MatMenuModule,
  ],
  templateUrl: './list-tax-collection-area.component.html',
  styleUrl: './list-tax-collection-area.component.scss',
})
export class ListTaxCollectionAreaComponent {
  dialog = inject(Dialog);
  stateList = [
    {
      id: 1,
      name: 'State 1',
    },
    {
      id: 2,
      name: 'State 2',
    },
    {
      id: 3,
      name: 'State 3',
    },
  ];
  taxCollectionAreas = new MatTableDataSource([
    {
      name: 'Area 1',
      zone: 'Zone 1',
      state: 'California',
      zoneManager: 'Alice Johnson',
    },
    {
      name: 'Area 2',
      zone: 'Zone 2',
      state: 'Texas',
      zoneManager: 'Bob Smith',
    },
    {
      name: 'Area 3',
      zone: 'Zone 3',
      state: 'New York',
      zoneManager: 'Charlie Davis',
    },
    {
      name: 'Area 4',
      zone: 'Zone 4',
      state: 'Florida',
      zoneManager: 'David Brown',
    },
    {
      name: 'Area 5',
      zone: 'Zone 5',
      state: 'Illinois',
      zoneManager: 'Emma Wilson',
    },
  ]);
  displayedColumnsAreaListing = ['#', 'name','zone', 'state', 'zoneManager', 'actions'];
  deleteArea() {}
  editArea() {}
  CreateAreaDialog() {
    this.dialog.open(CreateTaxCollectionAreaComponent, {
      minWidth: '300px',
    });
  }
  @ViewChild('paginator1') paginator1!: MatPaginator;
  ngOnInit() {
    this.taxCollectionAreas.paginator = this.paginator1
  }
}
