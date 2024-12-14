import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreatePosComponent } from '../create-pos/create-pos.component';
import { SearchComponent } from '../../../common/search/search.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ButtonComponent } from '../../../common/button/button.component';
import { PersonDetailsComponent } from '../../../common/person-details/person-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-list-pos',
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
  templateUrl: './list-pos.component.html',
  styleUrl: './list-pos.component.scss',
})
export class ListPosComponent {
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
// Dummy data for POS listing
posListings = new MatTableDataSource([
  {
    name: 'POS 1',
    state: 'California',
    zone: 'Zone 1',
    area: 'Area 1',
    manager: 'Alice Johnson',
  },
  {
    name: 'POS 2',
    state: 'Texas',
    zone: 'Zone 2',
    area: 'Area 2',
    manager: 'Bob Smith',
  },
  {
    name: 'POS 3',
    state: 'New York',
    zone: 'Zone 3',
    area: 'Area 3',
    manager: 'Charlie Davis',
  },
  {
    name: 'POS 4',
    state: 'Florida',
    zone: 'Zone 4',
    area: 'Area 4',
    manager: 'David Brown',
  },
  {
    name: 'POS 5',
    state: 'Illinois',
    zone: 'Zone 5',
    area: 'Area 5',
    manager: 'Emma Wilson',
  },
]);
displayedColumnsPOSListing = ['#', 'name', 'state', 'zone','area','manager', 'actions'];

  deleteArea() {}
  editArea() {}
  CreatePOSDialog() {
    this.dialog.open(CreatePosComponent, {
      minWidth: '300px',
    });
  }
  @ViewChild('paginator1') paginator1!: MatPaginator;
  ngOnInit() {
    this.posListings.paginator = this.paginator1
  }
}
