import { Component } from '@angular/core';
import { ApartCardComponent } from '../../../shared/components/apart-card/apart-card.component';
import { OurVisionComponent } from '../../../shared/components/our-vision/our-vision.component';

@Component({
  selector: 'app-about-us',
  imports: [OurVisionComponent, ApartCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  ourReports = [
    {
      id: 1,
      value: '90%',
      title: 'رضا العملاء',
    },
    {
      id: 2,
      value: '+8',
      title: 'سنوات الخبرة',
    },
    {
      id: 3,
      value: '+20K',
      title: 'عميل',
    },
  ];
  aparts = [
    {
      id: '01',
      svg: 'assets/images/pages/about/Group (1).png',
      title: 'الدعم متاح طوال الأيام',
      text: 'تجربة تسوق سلسة لملحقات الهواتف المحمولة',
    },
    {
      id: '02',
      svg: 'assets/images/pages/about/Group(2).png',
      title: 'توصيل إلى أي مكان',
      text: 'استمتع بتوصيل سريع وموثوق دون تأخير.',
    },
    {
      id: '03',
      svg: 'assets/images/pages/about/Icon.png',
      title: 'تسوق مريح',
      text: 'تجربة تسوق سلسة لملحقات الهواتف المحمولة.',
    },
    {
      id: '04',
      svg: 'assets/images/pages/about/Icon (1).png',
      title: 'معدات عالية الجودة',
      text: 'نحن نقدم فقط أفضل جودة من الملحقات.',
    },
  ];
}
