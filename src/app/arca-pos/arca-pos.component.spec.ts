import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcaPosComponent } from './arca-pos.component';

describe('ArcaPosComponent', () => {
  let component: ArcaPosComponent;
  let fixture: ComponentFixture<ArcaPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcaPosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcaPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
