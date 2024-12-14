import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ribbon',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './ribbon.component.html',
  styleUrl: './ribbon.component.scss',
})
export class RibbonComponent {
  @Input() cardData: any[] = [];
  @Input() name:string = '';
  @Input() location:string = '';
}
