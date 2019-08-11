import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { HeaderModule } from '../header/header.module';
import { SocialMediaModule } from 'src/shared/components/social-media/social-media.module';
import { ExperienceModule } from '../experience/experience.module';
import { SkillsModule } from '../skills/skills.module';
import { AboutModule } from '../about/about.module';
import { PersonProfileModule } from '../person-profile/person-profile.module';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderModule,
        PersonProfileModule,
        AboutModule,
        SkillsModule,
        ExperienceModule,
        SocialMediaModule,
        // RouterModule.forChild(routes)
      ],
      declarations: [ MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
