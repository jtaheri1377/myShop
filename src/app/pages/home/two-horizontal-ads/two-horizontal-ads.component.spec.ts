import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoHorizontalAdsComponent } from './two-horizontal-ads.component';

describe('TwoHorizontalAdsComponent', () => {
  let component: TwoHorizontalAdsComponent;
  let fixture: ComponentFixture<TwoHorizontalAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoHorizontalAdsComponent]
    });
    fixture = TestBed.createComponent(TwoHorizontalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
