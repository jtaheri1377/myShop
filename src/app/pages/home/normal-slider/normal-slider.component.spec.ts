import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSliderComponent } from './normal-slider.component';

describe('NormalSliderComponent', () => {
  let component: NormalSliderComponent;
  let fixture: ComponentFixture<NormalSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalSliderComponent]
    });
    fixture = TestBed.createComponent(NormalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
