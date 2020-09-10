import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'claes-account-update-password',
  templateUrl: './account-update-password.component.html',
  styleUrls: ['./account-update-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountUpdatePasswordComponent implements OnInit {
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
