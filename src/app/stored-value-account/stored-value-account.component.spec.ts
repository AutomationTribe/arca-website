import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredValueAccountComponent } from './stored-value-account.component';

describe('StoredValueAccountComponent', () => {
  let component: StoredValueAccountComponent;
  let fixture: ComponentFixture<StoredValueAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredValueAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoredValueAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
