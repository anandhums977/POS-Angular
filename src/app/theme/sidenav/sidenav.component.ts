import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  constructor(
    private authService: AuthService,  
    private router: Router
  ) {}


 
    logout() {
      // Trigger the logout logic in the AuthService
      this.authService.logout();
  
      // Redirect to the login page
      this.router.navigate(['/login']);
    }
  
}
