import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMgtComponent } from './card-mgt.component';

describe('CardMgtComponent', () => {
  let component: CardMgtComponent;
  let fixture: ComponentFixture<CardMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMgtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
