import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { DonutChartModule } from 'src/shared/components/donut-chart/donut-chart.module';
import { SkillBudgesModule } from 'src/shared/components/skill-budges/skill-budges.module';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DonutChartModule,
        SkillBudgesModule
      ],
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showSkills to true when element is in viewport', () => {
    const el = document.createElement('div');
    el.id = 'skills-donuts';
    document.body.appendChild(el);
    spyOn(component['eventsService'], 'isInViewport').and.returnValue(true);
    component.el = el;
    component.scroll();
    expect(component.showSkills).toBeTrue();
    document.body.removeChild(el);
  });

  it('should not set showSkills if element is not in viewport', () => {
    const el = document.createElement('div');
    el.id = 'skills-donuts';
    document.body.appendChild(el);
    spyOn(component['eventsService'], 'isInViewport').and.returnValue(false);
    component.el = el;
    component.scroll();
    expect(component.showSkills).toBeFalse();
    document.body.removeChild(el);
  });
});
