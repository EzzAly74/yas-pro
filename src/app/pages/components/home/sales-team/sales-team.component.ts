import {
  Component,
  ChangeDetectorRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { SliderComponent } from '../../../../shared/components/sliders/sales-team/slider/slider.component';
import { CommonModule } from '@angular/common';
import { SliderItemComponent } from '../../../../shared/components/sliders/sales-team/slider-item/slider-item.component';

@Component({
  selector: 'app-sales-team',
  imports: [SliderComponent, CommonModule, SliderItemComponent],
  templateUrl: './sales-team.component.html',
  styleUrl: './sales-team.component.scss',
})
export class SalesTeamComponent {
  isMobile: boolean = false;
  cards: any[] = [
    {
      id: 1,
      image: {
        src: 'images/sales-team/member2.png',
        alt: 'عثمان احمد',
        title: 'عثمان احمد',
      },
      name: 'عثمان احمد',
      position: 'فريق المبيعات',
      phone: '01155300800',
      bgColor: '#FEBDB8',
      social: {
        facebook: 'https://www.facebook.com/share/14MGPsZRvBk/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro.catalog.to/',
        whatsapp: 'https://wa.me/+201155300800/',
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
      phone: '01113000950',
      bgColor: '#FFE9A8',
      social: {
        facebook: 'https://www.facebook.com/share/17LVx3GeoW/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro101.catalog.to',
        whatsapp: 'https://wa.me/+201113000950/',
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
      phone: '01119144460',
      bgColor: '#DBD1FB',
      social: {
        facebook: 'https://www.facebook.com/share/17LkS8umPz/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro104.catalog.to',
        whatsapp: 'https://wa.me/+201119144460/',
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
      phone: '01142600006',
      bgColor: '#FFDBA9',
      social: {
        facebook: 'https://www.facebook.com/share/1JRXqdiagj/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro106.catalog.to',
        whatsapp: 'https://wa.me/+201142600006',
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
      phone: '01155337773',
      bgColor: '#CAECFC',
      social: {
        facebook: 'https://www.facebook.com/share/1Af7GgDgyC/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro102.catalog.to',
        whatsapp: 'https://wa.me/+201155337773',
      },
    },
    {
      id: 6,
      image: {
        src: 'images/sales-team/member2.png',
        alt: 'رحاب فرج',
        title: 'رحاب فرج',
      },
      name: 'رحاب فرج',
      position: 'فريق المبيعات',
      phone: '01102296664',
      bgColor: '#FFE9A8',
      social: {
        facebook: 'https://www.facebook.com/share/1ZqxMg87Vz/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro103.catalog.to',
        whatsapp: 'https://wa.me/+201102296664/',
      },
    },
    {
      id: 7,
      image: {
        src: 'images/sales-team/member1.png',
        alt: 'مريم محمد',
        title: 'مريم محمد',
      },
      name: 'مريم محمد',
      position: 'فريق المبيعات',
      phone: '01148007300',
      bgColor: '#DBD1FB',
      social: {
        facebook: 'https://www.facebook.com/share/1F9fafTzzJ/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro105.catalog.to',
        whatsapp: 'https://wa.me/+201148007300',
      },
    },
    {
      id: 8,
      image: {
        src: 'images/sales-team/member4.png',
        alt: 'منة عاطف',
        title: 'منة عاطف',
      },
      name: 'منة عاطف',
      position: 'فريق المبيعات',
      phone: '01156428000',
      bgColor: '#FFDBA9',
      social: {
        facebook: 'https://www.facebook.com/share/1HDtStFJgv/?mibextid=wwXIfr',
        telegram: 'https://t.me/mobilepro2020',
        tiktok: 'https://www.tiktok.com/',
        instagram:
          'https://www.instagram.com/mobilepro2022?igsh=MTU0MmszMzBxMGRuYg==',
        contact: 'https://mobilepro107.catalog.to',
        whatsapp: 'https://wa.me/+201156428000',
      },
    },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkIsMobile();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkIsMobile();
  }

  private checkIsMobile(): void {
    this.isMobile = window.innerWidth <= 768; // threshold for mobile view
    this.cdr.detectChanges(); // ensure Angular updates the view
  }
}
