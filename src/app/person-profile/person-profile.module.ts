import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonProfileComponent } from './person-profile.component';
import { ScrollDownButtonModule } from 'src/shared/components/scroll-down-button/scroll-down-button.module';
import { BlinkTypewriterModule } from 'src/shared/components/blink-typewriter/blink-typewriter.module';
import { ScrollDownMouseModule } from 'src/shared/components/scroll-down-mouse/scroll-down-mouse.module';



@NgModule({
  declarations: [PersonProfileComponent],
  imports: [
    CommonModule,
    ScrollDownButtonModule,
    BlinkTypewriterModule,
    ScrollDownMouseModule
  ],
  exports: [
    PersonProfileComponent
  ]
})
export class PersonProfileModule { }
