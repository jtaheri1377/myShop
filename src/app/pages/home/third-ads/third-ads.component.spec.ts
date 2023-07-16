import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdAdsComponent } from './third-ads.component';

describe('ThirdAdsComponent', () => {
  let component: ThirdAdsComponent;
  let fixture: ComponentFixture<ThirdAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdAdsComponent]
    });
    fixture = TestBed.createComponent(ThirdAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
