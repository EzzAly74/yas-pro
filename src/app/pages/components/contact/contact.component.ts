import { Component } from '@angular/core';
import { ContactsCardComponent } from "../../components/contacts-card/contacts-card.component";

@Component({
  selector: 'app-contact',
  imports: [ContactsCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactsInfo = [
    {
      id: 1,
      icon: 'assets/images/pages/contacts/telegram.png',
      title: 'تليجرام',
      caption: 'انضم إلى تيليجرام الخاص بنا للحصول على دعم سريع وزيادة رضا العملاء!',
      phone: '0223950507'
    },
    {
      id: 2,
      icon: 'assets/images/pages/contacts/whatsapp.png',
      title: 'مجموعة واتساب',
      caption: 'انضم إلى مجموعة واتساب الخاصة بنا للحصول على دعم سريع وزيادة رضا العملاء!',
      phone: '0223950507'
    },
    {
      id: 3,
      icon: 'assets/images/pages/contacts/whatsapp.png',
      title: 'واتساب',
      caption: 'تحدث معنا الآن على واتساب لأي تفاصيل',
      phone: '0223950507'
    }
  ]
}
