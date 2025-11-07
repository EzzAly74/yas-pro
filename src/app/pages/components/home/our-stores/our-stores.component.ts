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
      phone: '01155300800',
      location: 'https://maps.app.goo.gl/WmybbTBK1coohGUq6?g_st=aw',
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
      phone: '01140043370',
      location: 'https://maps.google.com/?q=27.179583,31.186480',
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
      phone: '',
      location: 'https://maps.google.com/?q=30.006973,31.280802',
    },
  ];
}
