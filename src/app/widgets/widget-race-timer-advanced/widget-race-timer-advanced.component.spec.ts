import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRaceTimerAdvancedComponent } from './widget-race-timer-advanced.component';

describe('WidgetRaceTimerAdvancedComponent', () => {
  let component: WidgetRaceTimerAdvancedComponent;
  let fixture: ComponentFixture<WidgetRaceTimerAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetRaceTimerAdvancedComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRaceTimerAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
