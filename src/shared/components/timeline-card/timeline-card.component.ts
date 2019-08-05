import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.scss']
})
export class TimelineCardComponent implements OnInit {

  @Input() title;
  @Input() subtitle;
  @Input() side;
  @Input() duration;

  constructor() { }

  ngOnInit() {
  }

}
