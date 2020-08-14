import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'claes-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountAppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
