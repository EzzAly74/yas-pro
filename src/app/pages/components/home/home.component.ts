import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DirectContactComponent } from './direct-contact/direct-contact.component';
import { ImportantListsComponent } from './important-lists/important-lists.component';
import { OurStoresComponent } from './our-stores/our-stores.component';
import { SalesTeamComponent } from './sales-team/sales-team.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SalesTeamComponent,
    DirectContactComponent,
    ContactUsComponent,
    ImportantListsComponent,
    OurStoresComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
