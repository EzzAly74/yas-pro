import { Component, Input, ViewChild } from '@angular/core';
import {
  CarouselModule,
  OwlOptions,
  CarouselComponent,
} from 'ngx-owl-carousel-o';
import { SliderItemComponent } from '../slider-item/slider-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-slider',
  imports: [CarouselModule, SliderItemComponent, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input() cards!: {
    id: number;
    number: string;
    title: string;
    description: string;
    link: {
      label: string;
      href: string;
    };
  }[];

  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    rtl: true,
    margin: 48,
    dots: false,
    nav: false, // 🚫 no default nav buttons
    navSpeed: 700,
    responsive: {
      0: { items: 1 },
      740: { items: 2 },
      940: { items: 3 },
    },
  };
}
