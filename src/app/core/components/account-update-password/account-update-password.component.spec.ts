import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUpdatePasswordComponent } from './account-update-password.component';

describe('AccountUpdatePasswordComponent', () => {
  let component: AccountUpdatePasswordComponent;
  let fixture: ComponentFixture<AccountUpdatePasswordComponent>;

  beforeEach(async(() => {
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
