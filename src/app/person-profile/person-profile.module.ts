import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonProfileComponent } from './person-profile.component';



@NgModule({
  declarations: [PersonProfileComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PersonProfileComponent
  ]
})
export class PersonProfileModule { }
