import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from '../../auth/auth.service';

import { AccountApplicationListComponent } from './account-application-list.component';

describe('AccountApplicationListComponent', () => {
  let component: AccountApplicationListComponent;
  let fixture: ComponentFixture<AccountApplicationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccountApplicationListComponent],
      providers: [
        AuthService
      ],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
