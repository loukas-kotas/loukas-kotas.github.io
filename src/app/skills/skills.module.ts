import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { DonutChartModule } from 'src/shared/components/donut-chart/donut-chart.module';
import { SkillBudgesModule } from 'src/shared/components/skill-budges/skill-budges.module';



@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    DonutChartModule,
    SkillBudgesModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
