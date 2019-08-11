import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { TimelineCardModule } from 'src/shared/components/timeline-card/timeline-card.module';
import { TimelineCardComponent } from 'src/shared/components/timeline-card/timeline-card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TimelineCardModule
      ],
      declarations: [ ExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('#duth'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should DUTh card exist', () => {
    expect(debugElement).toBeTruthy();
  });

  it(`should has 'DUTh' title`, () => {
    expect(debugElement.attributes['ng-reflect-title']).toEqual('Democritus University of Thrac');
  });
});
