import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AccountApplicationListComponent } from 'src/app/core/components/account-application-list/account-application-list.component';
import { AccountMenuComponent } from 'src/app/core/components/account-menu/account-menu.component';
import { AccountUpdatePasswordComponent } from 'src/app/core/components/account-update-password/account-update-password.component';
import { CoreModule } from 'src/app/core/core.module';

import { AccountAppsComponent } from './apps.component';

describe('AppsComponent', () => {
  let component: AccountAppsComponent;
  let fixture: ComponentFixture<AccountAppsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountAppsComponent
      ],
      imports: [
        TranslateModule.forRoot(),
        CoreModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
