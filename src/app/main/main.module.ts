import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { PersonProfileModule } from '../person-profile/person-profile.module';
import { AboutModule } from '../about/about.module';
import { SkillsModule } from '../skills/skills.module';

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
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
