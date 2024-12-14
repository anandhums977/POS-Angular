import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AuthService } from '../../core/services/auth/auth.service';
@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [SidenavComponent, RouterOutlet, FooterComponent],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
})
export class ThemeComponent {
  isLoggedIn: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((status) => {
      this.isLoggedIn = status;
    });
}
}