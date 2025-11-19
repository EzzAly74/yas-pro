import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-card',
  imports: [],
  templateUrl: './contacts-card.component.html',
  styleUrl: './contacts-card.component.scss'
})
export class ContactsCardComponent {
  @Input({ required: true }) contactInfo !: {
    id: number,
    icon: string,
    title: string,
    caption: string,
    phone: string
  }
}
