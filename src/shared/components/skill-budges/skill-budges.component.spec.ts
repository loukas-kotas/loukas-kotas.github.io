import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBudgesComponent } from './skill-budges.component';

describe('SkillBudgesComponent', () => {
  let component: SkillBudgesComponent;
  let fixture: ComponentFixture<SkillBudgesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillBudgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBudgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
