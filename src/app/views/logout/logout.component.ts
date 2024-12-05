import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PATH } from '@constants/routes';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  #router = inject(Router);
  // #session = inject(SessionService)

  constructor() {
    // this.#session.clearSession()
    this.logout()
  }

  logout() {
    this.#router.navigate([PATH.AUTH]);
  }
}
