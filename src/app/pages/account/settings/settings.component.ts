import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'claes-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountSettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
