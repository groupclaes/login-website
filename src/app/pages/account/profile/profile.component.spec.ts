import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: AccountProfileComponent;
  let fixture: ComponentFixture<AccountProfileComponent>;

  beforeEach(async(() => {
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
