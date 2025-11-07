import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  stores = [
    {
      name: 'العتبة',
      address: 'أول شارع ممتاز من ناحية شارع العطار محل (موبايل برو)',
      phone: '01155300800',
    },
    {
      name: 'أسيوط',
      address:
        'المحطة - المركز التجاري الدولي الدور الأول أمام مطعم الناحل محل (موبايل برو)',
      phone: '01140043370',
    },
    {
      name: 'الإدارة والمخازن',
      address:
        'المقطم - الهضبة الوسطى الحي الأول - قطعة 1845 بالقرب من شارع مدرسة البارون',
      phone: '',
    },
  ];
}
