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
  standalone: true,
  imports: [CarouselModule, SliderItemComponent, CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @ViewChild(CarouselComponent, { static: false })
  owlCarousel!: CarouselComponent;
  isMobile: boolean = false;

  @Input() cards!: {
    id: number;
    image: { src: string; alt: string; title: string };
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
      whatsapp: string;
    };
  }[];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    rtl: true,
    margin: 24,
    dots: false,
    nav: false,
    navSpeed: 700,
    responsive: {
      0: { items: 1.5, center: false },
      400: { items: 2.5, center: false },
      740: { items: 3.5 },
      940: { items: 4.5 },
    },
  };

  next() {
    this.owlCarousel.next(); // سرعة الحركة
  }

  prev() {
    this.owlCarousel.prev();
  }
}
