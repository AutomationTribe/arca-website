import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalMgtComponent } from './terminal-mgt.component';

describe('TerminalMgtComponent', () => {
  let component: TerminalMgtComponent;
  let fixture: ComponentFixture<TerminalMgtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalMgtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
