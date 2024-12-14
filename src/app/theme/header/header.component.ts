import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../common/button/button.component';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent,RouterModule,FormsModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  pageType = 'dash';
  selectedLanguage = 'en';
  constructor(private translateService: TranslateService){}

  buttonClicked(event: any) {
    console.log(event);
  }

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage)
  }
}
