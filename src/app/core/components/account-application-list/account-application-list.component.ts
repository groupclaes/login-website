import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'claes-account-application-list',
  templateUrl: './account-application-list.component.html',
  styleUrls: ['./account-application-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountApplicationListComponent implements OnInit {
  applications: any[];

  constructor(
    private ref: ChangeDetectorRef,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.getApplications().subscribe(response => {
      this.applications = response;
      this.ref.markForCheck();
    });
  }
}
