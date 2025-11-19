import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopInfoBarComponent } from './core/components/top-info-bar/top-info-bar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeroComponent } from './pages/components/home/hero/hero.component';
import { SalesTeamComponent } from './pages/components/home/sales-team/sales-team.component';
import { DirectContactComponent } from './pages/components/home/direct-contact/direct-contact.component';
import { ContactUsComponent } from './pages/components/home/contact-us/contact-us.component';
import { ImportantListsComponent } from './pages/components/home/important-lists/important-lists.component';
import { OurStoresComponent } from './pages/components/home/our-stores/our-stores.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { WhatsAppIconComponent } from './core/components/whats-app-icon/whats-app-icon.component';
import { HomeComponent } from './pages/components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TopInfoBarComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    WhatsAppIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'yas-pro';
}
