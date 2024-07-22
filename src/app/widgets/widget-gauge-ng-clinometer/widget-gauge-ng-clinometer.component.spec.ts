import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetGaugeNgClinometerComponent } from './widget-gauge-ng-clinometer.component';

describe('WidgetGaugeNgClinometerComponent', () => {
  let component: WidgetGaugeNgClinometerComponent;
  let fixture: ComponentFixture<WidgetGaugeNgClinometerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WidgetGaugeNgClinometerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGaugeNgClinometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
