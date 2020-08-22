import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skill-budges',
  templateUrl: './skill-budges.component.html',
  styleUrls: ['./skill-budges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillBudgesComponent implements OnInit {

  @Input() title: string;
  @Input() iconTitles: string;
  @Input() tooltipTitles: string;
  @Input() tooltipPosition: string;
  @Input() titleClasses: string[] = [' ', ''];

  constructor() { }

  ngOnInit() {
    this.setDefaultValues();
  }

  setDefaultValues(): void {

    if ( !this.tooltipPosition ) {
      this.tooltipPosition = 'top';
    }

  }

  titleClasses2String() {
    console.log(this.titleClasses);
    return this.titleClasses;
    // return this.titleClasses.join(' ');
  }

}
