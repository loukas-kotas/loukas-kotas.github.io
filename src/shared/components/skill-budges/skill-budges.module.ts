import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBudgesComponent } from './skill-budges.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [SkillBudgesComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports: [
    SkillBudgesComponent
  ]
})
export class SkillBudgesModule { }
