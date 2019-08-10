import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonProfileComponent } from './person-profile.component';
import { ScrollDownButtonModule } from 'src/shared/components/scroll-down-button/scroll-down-button.module';



@NgModule({
  declarations: [PersonProfileComponent],
  imports: [
    CommonModule,
    ScrollDownButtonModule
  ],
  exports: [
    PersonProfileComponent
  ]
})
export class PersonProfileModule { }
