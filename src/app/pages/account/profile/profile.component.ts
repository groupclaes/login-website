import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'claes-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
