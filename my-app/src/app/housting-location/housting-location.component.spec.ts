import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoustingLocationComponent } from './housting-location.component';

describe('HoustingLocationComponent', () => {
  let component: HoustingLocationComponent;
  let fixture: ComponentFixture<HoustingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoustingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoustingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
