import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountUpdatePasswordComponent } from './account-update-password.component';

describe('AccountUpdatePasswordComponent', () => {
  let component: AccountUpdatePasswordComponent;
  let fixture: ComponentFixture<AccountUpdatePasswordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountUpdatePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUpdatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
