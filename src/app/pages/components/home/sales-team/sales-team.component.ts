import { Component, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SliderComponent } from '../../../../shared/components/sliders/sales-team/slider/slider.component';

@Component({
  selector: 'app-sales-team',
  imports: [SliderComponent],
  templateUrl: './sales-team.component.html',
  styleUrl: './sales-team.component.scss',
})
export class SalesTeamComponent {
  cards: any[] = [
    {
      id: 1,
      image: {
        src: 'images/sales-team/member2.png',
        alt: 'عثمان محمد',
        title: 'عثمان محمد',
      },
      name: 'عثمان محمد',
      position: 'فريق المبيعات',
      phone: '0113000950',
      bgColor: '#FEBDB8',
      social: {
        facebook: 'https://www.facebook.com/',
        telegram: 'https://t.me/',
        tiktok: 'https://www.tiktok.com/',
        instagram: 'https://www.instagram.com/',
        contact: 'https://wa.me/20113000950',
      },
    },
    {
      id: 2,
      image: {
        src: 'images/sales-team/member1.png',
        alt: 'اسراء ايمن',
        title: 'اسراء ايمن',
      },
      name: 'اسراء ايمن',
      position: 'فريق المبيعات',
      phone: '0113000950',
      bgColor: '#FFE9A8',
      social: {
        facebook: 'https://www.facebook.com/',
        telegram: 'https://t.me/',
        tiktok: 'https://www.tiktok.com/',
        instagram: 'https://www.instagram.com/',
        contact: 'https://wa.me/20113000950',
      },
    },
    {
      id: 3,
      image: {
        src: 'images/sales-team/member3.png',
        alt: 'مروه عوض',
        title: 'مروه عوض',
      },
      name: 'مروه عوض',
      position: 'فريق المبيعات',
      phone: '0113000950',
      bgColor: '#DBD1FB',
      social: {
        facebook: 'https://www.facebook.com/',
        telegram: 'https://t.me/',
        tiktok: 'https://www.tiktok.com/',
        instagram: 'https://www.instagram.com/',
        contact: 'https://wa.me/20113000950',
      },
    },
    {
      id: 4,
      image: {
        src: 'images/sales-team/member4.png',
        alt: 'رحاب ابراهيم',
        title: 'رحاب ابراهيم',
      },
      name: 'رحاب ابراهيم',
      position: 'فريق المبيعات',
      phone: '0113000950',
      bgColor: '#FFDBA9',
      social: {
        facebook: 'https://www.facebook.com/',
        telegram: 'https://t.me/',
        tiktok: 'https://www.tiktok.com/',
        instagram: 'https://www.instagram.com/',
        contact: 'https://wa.me/20113000950',
      },
    },
    {
      id: 5,
      image: {
        src: 'images/sales-team/member5.png',
        alt: 'منار احمد',
        title: 'منار احمد',
      },
      name: 'منار احمد',
      position: 'فريق المبيعات',
      phone: '0113000950',
      bgColor: '#CAECFC',
      social: {
        facebook: 'https://www.facebook.com/',
        telegram: 'https://t.me/',
        tiktok: 'https://www.tiktok.com/',
        instagram: 'https://www.instagram.com/',
        contact: 'https://wa.me/20113000950',
      },
    },
  ];
}
