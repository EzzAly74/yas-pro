import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-stores',
  imports: [CommonModule],
  templateUrl: './our-stores.component.html',
  styleUrl: './our-stores.component.scss',
})
export class OurStoresComponent {
  stores = [
    {
      image: {
        src: 'images/stores/ataba.png',
        alt: 'فرع العتبة',
        title: 'فرع العتبة',
      },
      name: 'العتبة',
      address: 'أول شارع ممتاز من ناحية شارع العطار محل (موبايل برو)',
      phone: '0223921797',
      location: 'https://www.google.com/maps?q=30.045915,31.243917',
    },
    {
      image: {
        src: 'images/stores/asyout.png',
        alt: 'فرع أسيوط',
        title: 'فرع أسيوط',
      },
      name: 'أسيوط',
      address:
        'المحطة - المركز التجاري الدولي الدور الأول أمام مطعم الناحل محل (موبايل برو)',
      phone: '0223921797',
      location: 'https://www.google.com/maps?q=30.045915,31.243917',
    },
    {
      image: {
        src: 'images/stores/ataba.png',
        alt: 'فرع المقطم',
        title: 'فرع المقطم',
      },
      name: 'الإدارة والمخازن',
      address:
        'المقطم - الهضبة الوسطى الحي الأول - قطعة 1845 بالقرب من شارع مدرسة البارون',
      phone: '0223921797',
      location: 'https://www.google.com/maps?q=30.045915,31.243917',
    },
  ];
}
