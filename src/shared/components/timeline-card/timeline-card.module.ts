import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineCardComponent } from './timeline-card.component';



@NgModule({
  declarations: [TimelineCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TimelineCardComponent
  ]
})
export class TimelineCardModule { }
