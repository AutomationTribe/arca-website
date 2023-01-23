import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSwitchComponent } from './account-switch.component';

describe('AccountSwitchComponent', () => {
  let component: AccountSwitchComponent;
  let fixture: ComponentFixture<AccountSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
