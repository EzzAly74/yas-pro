import { Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { NewsComponent } from './pages/components/news/news.component';
import { AboutUsComponent } from './pages/components/about-us/about-us.component';
import { ContactUsComponent } from './pages/components/home/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];
