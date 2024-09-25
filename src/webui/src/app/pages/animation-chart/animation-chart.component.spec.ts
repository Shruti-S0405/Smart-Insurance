import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationChartComponent } from './animation-chart.component';

describe('AnimationChartComponent', () => {
  let component: AnimationChartComponent;
  let fixture: ComponentFixture<AnimationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
