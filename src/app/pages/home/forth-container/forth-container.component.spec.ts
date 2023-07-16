import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthContainerComponent } from './forth-container.component';

describe('ForthContainerComponent', () => {
  let component: ForthContainerComponent;
  let fixture: ComponentFixture<ForthContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForthContainerComponent]
    });
    fixture = TestBed.createComponent(ForthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
