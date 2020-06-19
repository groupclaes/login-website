import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'claes-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {

    } else {
      this.auth.verify().subscribe(() => {
        // ok
      }, err => {
        if (err) {
          this.router.navigate(['/login']);
          this.ref.markForCheck();
        }
      });
    }
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/login']);
      this.ref.markForCheck();
    });
  }
}
