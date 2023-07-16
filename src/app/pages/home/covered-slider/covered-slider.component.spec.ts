import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveredSliderComponent } from './covered-slider.component';

describe('CoveredSliderComponent', () => {
  let component: CoveredSliderComponent;
  let fixture: ComponentFixture<CoveredSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoveredSliderComponent]
    });
    fixture = TestBed.createComponent(CoveredSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
