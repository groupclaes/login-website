import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountApplicationListComponent } from './account-application-list.component';

describe('AccountApplicationListComponent', () => {
  let component: AccountApplicationListComponent;
  let fixture: ComponentFixture<AccountApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountApplicationListComponent ]
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
