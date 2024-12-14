import { Component } from '@angular/core';
import { RibbonComponent } from '../../../../common/ribbon/ribbon.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { SearchComponent } from '../../../../common/search/search.component';
import { ButtonComponent } from '../../../../common/button/button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CreateAdminComponent } from '../create-admin/create-admin.component';
import { CreateStateComponent } from '../create-state/create-state.component';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../../../../common/confirmation/confirmation.component';

@Component({
  selector: 'app-root-admin-dashboard',
  standalone: true,
  imports: [
    RibbonComponent,
    MatTabsModule,
    SearchComponent,
    CreateAdminComponent,
    MatTableModule,
    ButtonComponent,
    MatDialogModule,
    MatPaginator,
    MatPaginatorModule,
    ConfirmationComponent,
  ],
  templateUrl: './root-admin-dashboard.component.html',
  styleUrl: './root-admin-dashboard.component.scss',
})
export class RootAdminDashboardComponent {
  name = 'John Doe';
  location = 'Kochin';
  cardDetails = [
    {
      name: 'Admins',
      value: '15',
      type: 1,
    },
    {
      name: 'States',
      value: '17',
      type: 5,
    },
    {
      name: 'Taxes',
      value: '23',
      type: 4,
    },
  ];

  tableData = [
    {
      id: 1,
      name: 'Abin',
      state: 'State 1',
      username: 'abinusername',
      password: 'Something@12546',
      email: 'abin@hotmail.com',
      actions: { accept: 'DELETE', reject: 'EDIT' },
    },
    {
      id: 2,
      name: 'Alex',
      state: 'State 2',
      username: 'alexusername',
      password: 'Something@12546',
      email: 'alex@hotmail.com',
      actions: { accept: 'DELETE', reject: 'EDIT' },
    },
    {
      id: 3,
      name: 'Adam',
      state: 'State 3',
      username: 'adamusername',
      password: 'Something@12546',
      email: 'adam@hotmail.com',
      actions: { accept: 'DELETE', reject: 'EDIT' },
    },
    {
      id: 4,
      name: 'Scott',
      state: 'State 4',
      username: 'scottusername',
      password: 'Something@12546',
      email: 'scott@hotmail.com',
      actions: { accept: 'DELETE', reject: 'EDIT' },
    },
    {
      id: 5,
      name: 'Eddy',
      state: 'State 5',
      username: 'eddyusername',
      password: 'Something@12546',
      email: 'eddy@hotmail.com',
      actions: { accept: 'DELETE', reject: 'EDIT' },
    },
    {
      id: 6,
      name: 'Max',
      state: 'State 6',
      username: 'maxusername',
      password: 'Something@12546',
      email: 'max@hotmail.com',
      actions: { accept: 'DELETE', reject: 'EDIT' },
    },
  ];
  displayedColumns = [
    '#',
    'name',
    'state',
    'username',
    'password',
    'email',
    'actions',
  ];
  displayedTaxColumns = ['#', 'name', 'amount', 'actions'];

  constructor(private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    // this.openAdminDialog('400ms', '200ms');
  }

  createAdmin(event: any) {
    console.log(event, 'from Root Admin Dash');
    this.openAdminDialog('400ms', '200ms');
  }

  createState(event: any) {
    console.log(event, 'from Root Admin Dash');
    this.openStateDialog('400ms', '200ms');
  }

  openAdminDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CreateAdminComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openStateDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(CreateStateComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDeleteConfirm(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ConfirmationComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: { type: 'delete' },
    });
  }

  openRejectConfirm(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(ConfirmationComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: { type: 'reject' },
    });
  }

  createTax(event: any) {
    this.router.navigateByUrl('create-tax');
  }

  deleteAdmin() {}
  editAdmin() {}
}
