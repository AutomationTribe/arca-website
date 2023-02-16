import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSection2Component } from './collapse-section2.component';

describe('CollapseSection2Component', () => {
  let component: CollapseSection2Component;
  let fixture: ComponentFixture<CollapseSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseSection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
