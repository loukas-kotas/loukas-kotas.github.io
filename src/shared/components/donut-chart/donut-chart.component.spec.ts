import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutChartComponent } from './donut-chart.component';
import { Component, Input } from '@angular/core';

describe('DonutChartComponent', () => {
  let component: TestDonutComponent;
  let fixture: ComponentFixture<TestDonutComponent>;

  @Component({
    selector: 'app-test-donut-chart',
    template: `<app-donut-chart [id]="1"></app-donut-chart>`
  }) class TestDonutComponent {
    @Input() id;
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutChartComponent, TestDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // component.ngAfterViewInit();
    expect(component).toBeTruthy();
  });
});
