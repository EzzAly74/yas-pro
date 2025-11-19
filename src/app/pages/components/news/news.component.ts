import { Component } from '@angular/core';
import { BlackFridayComponent } from '../../../shared/components/black-friday/black-friday.component';

@Component({
  selector: 'app-news',
  imports: [BlackFridayComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {}
