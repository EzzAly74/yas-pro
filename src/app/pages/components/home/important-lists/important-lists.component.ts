import { Component } from '@angular/core';
import { SliderComponent } from '../../../../shared/components/sliders/important-lists/slider/slider.component';

@Component({
  selector: 'app-important-lists',
  imports: [SliderComponent],
  templateUrl: './important-lists.component.html',
  styleUrl: './important-lists.component.scss',
})
export class ImportantListsComponent {
  cards = [
    {
      id: 1,
      number: '01',
      title: 'أرقام فودافون كاش',
      description: 'دلوقت تقدر توصل لارقام فودافون كاش الحقيقيه من هنا!',
      link: {
        label: 'قائمه ارقام فودافون كاش',
        href: '',
      },
    },
    {
      id: 2,
      number: '02',
      title: 'قوائم أسعار البطاريات',
      description: 'دلوقت تقدر توصل لقوائم اسعار البطاريات أول بأول من هنا',
      link: {
        label: 'قائمه اسعار البطاريات',
        href: '',
      },
    },
    {
      id: 3,
      number: '03',
      title: 'قائمة أسعار الكهرباء',
      description:
        'دلوقت تقدر توصل لقائمة اسعار الكهرباء المحدثه أول باول من هنا!',
      link: {
        label: 'قائمه اسعار الكهرباء',
        href: '',
      },
    },
    {
      id: 4,
      number: '04',
      title: 'سجل نواقص السوق',
      description: 'دلوقت تقدر تسجل نواقصك من هنا بكل سهوله',
      link: {
        label: 'قائمه اسعار البطاريات',
        href: '',
      },
    },
    {
      id: 5,
      number: '05',
      title: 'قائمة أسعار الاسكرينات',
      description:
        'دلوقت تقدر توصل لقائمة اسعار الاسكرينات المحدثه أول باول من هنا!',
      link: {
        label: 'قائمه اسعار الاسكرينات',
        href: '',
      },
    },
  ];
}
