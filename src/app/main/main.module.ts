import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { PersonProfileModule } from '../person-profile/person-profile.module';
import { AboutModule } from '../about/about.module';
import { SkillsModule } from '../skills/skills.module';
import { ExperienceModule } from '../experience/experience.module';
import { SocialMediaModule } from 'src/shared/components/social-media/social-media.module';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    PersonProfileModule,
    AboutModule,
    SkillsModule,
    ExperienceModule,
    SocialMediaModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
