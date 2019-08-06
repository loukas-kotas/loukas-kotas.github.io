import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit, AfterViewInit {

  @Input() value;
  @Input() id;
  @Input() title;
  @Input() circleColor;
  @Input() circleBgdColor;
  valueMax = 100;
  skill: HTMLElement;
  titleEl: HTMLElement;
  centerEl: HTMLElement;
  @Input() size;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.skill = document.getElementById(this.id);
    this.titleEl = document.getElementById(`title-${this.id}`);
    this.centerEl = document.getElementById(`center`);
    this.setValueNow();
    this.setProperties();
  }

  setProperties() {
    this.setSize();
    this.setCircleColor();
    this.setBgdColor();
  }

  setValueNow() {
    const value = `${this.value} ${this.valueMax}`;
    this.skill.style.setProperty('stroke-dasharray', value);
  }

  setSize() {
    const donutSize = 130;
    const defaultSize = `${donutSize}px`;
    const ratio = 0.2823529411764706;
    const textSize = `${donutSize * ratio}px`;
    const ratioLineHeight = 0.7352941176470589;
    const lineHeight = `${donutSize * ratioLineHeight}px`;

    if ( this.size ) {
      this.skill.style.setProperty('height', this.size);
      this.skill.style.setProperty('width', this.size);
      this.titleEl.style.setProperty('max-width', this.size);
    } else {
      this.skill.style.setProperty('height', defaultSize);
      this.skill.style.setProperty('width', defaultSize);
      this.titleEl.style.setProperty('max-width', defaultSize);
      this.skill.style.setProperty('--percentage-size', lineHeight);
      this.skill.style.setProperty('--center-text-size', textSize);
      this.skill.style.setProperty('--skill-strength', `'${this.value}%'`);
    }

  }

  setCircleColor() {
    const defaultColor = '#f26a4a';
    if ( this.circleColor ) {
      this.skill.style.setProperty('stroke', this.circleColor);
    } else {
      this.skill.style.setProperty('stroke', defaultColor);
    }
  }

  setBgdColor() {
    const defaultColor = '#ffffff';
    if (this.circleBgdColor) {
      this.skill.style.setProperty('--background-color', this.circleBgdColor);
    } else {
      this.skill.style.setProperty('--background-color', defaultColor);
    }
  }

}
