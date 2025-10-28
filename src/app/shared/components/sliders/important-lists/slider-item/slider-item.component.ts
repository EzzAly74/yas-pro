import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  imports: [],
  templateUrl: './slider-item.component.html',
  styleUrl: './slider-item.component.scss',
})
export class SliderItemComponent {
  @Input({ required: true }) card!: {
    id: number;
    number: string;
    title: string;
    description: string;
    link: {
      label: string;
      href: string;
    };
  };
}
