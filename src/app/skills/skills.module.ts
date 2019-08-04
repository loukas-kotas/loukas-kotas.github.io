import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { DonutChartModule } from 'src/shared/components/donut-chart/donut-chart.module';



@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    DonutChartModule
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
