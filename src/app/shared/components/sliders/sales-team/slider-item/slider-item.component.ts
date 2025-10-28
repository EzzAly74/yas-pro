import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  imports: [CommonModule],
  templateUrl: './slider-item.component.html',
  styleUrl: './slider-item.component.scss',
})
export class SliderItemComponent {
  @Input({ required: true }) card!: {
    id: number;
    image: {
      src: string;
      alt: string;
      title: string;
    };
    name: string;
    position: string;
    phone: string;
    bgColor: string;
    social: {
      facebook: string;
      telegram: string;
      tiktok: string;
      instagram: string;
      contact: string;
    };
  };
}
