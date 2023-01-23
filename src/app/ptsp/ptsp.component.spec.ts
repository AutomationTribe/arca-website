import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTSPComponent } from './ptsp.component';

describe('PTSPComponent', () => {
  let component: PTSPComponent;
  let fixture: ComponentFixture<PTSPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTSPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PTSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
