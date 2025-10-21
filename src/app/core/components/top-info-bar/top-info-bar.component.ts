import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-info-bar',
  imports: [CommonModule],
  templateUrl: './top-info-bar.component.html',
  styleUrl: './top-info-bar.component.scss',
})
export class TopInfoBarComponent {
  contactMessages = [
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
    'للشكاوي  والاقتراحات +02239507',
  ];
}
