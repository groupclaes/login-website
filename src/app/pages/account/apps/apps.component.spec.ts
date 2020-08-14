import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAppsComponent } from './apps.component';

describe('AppsComponent', () => {
  let component: AccountAppsComponent;
  let fixture: ComponentFixture<AccountAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountAppsComponent]
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
