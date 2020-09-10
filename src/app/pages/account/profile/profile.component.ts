import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'claes-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountProfileComponent implements OnInit {
  updatePasswordForm: FormGroup;

  constructor(
    private ref: ChangeDetectorRef,
    private auth: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.updatePasswordForm = this.fb.group({
      oldPassword: [, [Validators.required]],
      newPassword: [, [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: [, [Validators.required, Validators.minLength(8)]]
    });
    this.updatePasswordForm.updateValueAndValidity();
    this.ref.markForCheck();
  }

  updatePassword() {
    this.auth.postUpdatedPassword(this.updatePasswordForm.value).subscribe(r => {
      alert('password has been updated!');
    });
  }
}
