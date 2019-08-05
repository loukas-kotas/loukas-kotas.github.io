import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { TimelineCardModule } from 'src/shared/components/timeline-card/timeline-card.module';



@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    TimelineCardModule
  ],
  exports: [
    ExperienceComponent
  ]
})
export class ExperienceModule { }
