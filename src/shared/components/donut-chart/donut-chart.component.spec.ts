import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartComponent } from './donut-chart.component';
import { Component, Input } from '@angular/core';

describe('DonutChartComponent', () => {
  let component: TestDonutChartComponent;
  let fixture: ComponentFixture<TestDonutChartComponent>;

  @Component({
    selector: 'app-test-donut-chart',
    template: `<app-donut-chart [id]="1"></app-donut-chart>`
  }) class TestDonutChartComponent extends DonutChartComponent {
    constructor() {
      super();
      this.id = '1';
      this.title = 'fake title';
      this.circleColor = 'black';
      this.circleBgdColor = 'white';
    }
  }




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutChartComponent, TestDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
