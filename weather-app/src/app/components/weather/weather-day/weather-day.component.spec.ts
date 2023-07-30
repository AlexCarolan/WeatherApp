import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDayComponent } from './weather-day.component';

describe('WeatherDayComponent', () => {
  let component: WeatherDayComponent;
  let fixture: ComponentFixture<WeatherDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDayComponent]
    });
    fixture = TestBed.createComponent(WeatherDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
