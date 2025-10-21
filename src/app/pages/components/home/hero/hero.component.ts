import { Component } from '@angular/core';
import { RegularBtnComponent } from '../../../../shared/components/buttons/regular-btn/regular-btn.component';

@Component({
  selector: 'app-hero',
  imports: [RegularBtnComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  browseBtn = {
    type: 'link',
    label: 'تصفح منتجاتنا',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    radius: 10,
    href: 'https://www.google.com',
    styleType: 'regular',
    width: 457,
    height: 74,
  };
}
