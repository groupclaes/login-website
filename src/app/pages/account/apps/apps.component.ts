import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'claes-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountAppsComponent implements OnInit {

  constructor(
    private ref: ChangeDetectorRef,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
}
