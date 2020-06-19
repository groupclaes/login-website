import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'claes-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  verifyResponse: string;

  params: {
    src: string;
    ui: string;
  };

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params.src && params.ui) {
        this.params = {
          src: params.src,
          ui: params.ui
        };
      }
    });
  }

  ngOnInit() {
    this.auth.verify().subscribe(() => {
      this.router.navigate(['/account']);
      this.ref.markForCheck();
    });
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(() => {
      if (this.params.src) {
        switch (this.params.src) {
          case 'manage':
            window.location.href = 'https://emp.groupclaes.be/' + this.params.ui;
            return;

          default:
            break;
        }
      } else {
        this.router.navigate(['/account']);
        this.ref.markForCheck();
      }
    });
  }

  setLang(lang: string) {
    this.translate.use(lang);
    window.localStorage.setItem('language', lang);
    this.ref.markForCheck();
  }
}
