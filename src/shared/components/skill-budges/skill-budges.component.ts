import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-budges',
  templateUrl: './skill-budges.component.html',
  styleUrls: ['./skill-budges.component.scss']
})
export class SkillBudgesComponent implements OnInit {

  @Input() title: string;
  @Input() iconTitles: string;
  @Input() tooltipTitles: string;
  @Input() tooltipPosition: string | 'top';

  constructor() { }

  ngOnInit() {
  }

}
