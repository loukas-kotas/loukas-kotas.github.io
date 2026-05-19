import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillBudgesModule } from 'src/shared/components/skill-budges/skill-budges.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillBudgesModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
