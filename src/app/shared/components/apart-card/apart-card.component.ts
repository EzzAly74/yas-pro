import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-apart-card',
  imports: [],
  templateUrl: './apart-card.component.html',
  styleUrl: './apart-card.component.scss'
})
export class ApartCardComponent {
  @Input({ required: true }) apartData!:
    {
      id: string,
      svg: string,
      title: string,
      text: string
    }
}
