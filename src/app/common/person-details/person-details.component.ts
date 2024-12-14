import { Component, inject, Input } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'person-details',
  standalone: true,
  imports: [],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.scss'
})
export class PersonDetailsComponent {
  constructor(public dialogRef: DialogRef){

  }
  imageSrc = '';
  data = inject(DIALOG_DATA);

}
