import { Component } from '@angular/core';
import { RegularBtnComponent } from '../../../shared/components/buttons/regular-btn/regular-btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RegularBtnComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  browseBtn = {
    type: 'link',
    label: 'تصفح منتجاتنا',
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path d="M16 9V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V9M3.6 10.35L3 16.75C2.82 18.57 2.74 19.48 3.04 20.18C3.3 20.8 3.77 21.31 4.36 21.63C5.03 22 5.94 22 7.77 22H16.23C18.06 22 18.97 22 19.64 21.63C20.23 21.31 20.7 20.8 20.96 20.18C21.26 19.48 21.18 18.57 21.01 16.75L20.41 10.35C20.26 8.82 20.19 8.05 19.85 7.47C19.54 6.95 19.09 6.55 18.55 6.29C17.94 6 17.17 6 15.63 6H8.37C6.83 6 6.06 6 5.45 6.29C4.91 6.55 4.46 6.95 4.15 7.47C3.81 8.05 3.74 8.82 3.6 10.35Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    radius: 20,
    href: 'https://www.google.com',
    styleType: 'regular',
    width: 233,
    height: 51,
  };

  combBtn = {
    type: 'link',
    label: 'تطبيق التوافيق',
    radius: 20,
    href: 'https://www.google.com',
    styleType: 'outline',
    width: 233,
    height: 51,
  };
}
