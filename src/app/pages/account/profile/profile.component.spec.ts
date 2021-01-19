import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: AccountProfileComponent;
  let fixture: ComponentFixture<AccountProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccountProfileComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
