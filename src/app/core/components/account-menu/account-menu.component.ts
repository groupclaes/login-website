import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'claes-account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountMenuComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/login']);
      this.ref.markForCheck();
    });
  }
}
