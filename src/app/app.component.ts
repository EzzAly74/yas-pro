import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopInfoBarComponent } from './core/components/top-info-bar/top-info-bar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HeroComponent } from './pages/components/home/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopInfoBarComponent, NavbarComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'yas-pro';
}
