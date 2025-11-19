import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-vision',
  imports: [],
  templateUrl: './our-vision.component.html',
  styleUrl: './our-vision.component.scss'
})
export class OurVisionComponent {
  @Input({ required: true }) info!: {
    imageUrl: string,
    title: string,
    caption: string,
    taking: string,
    dir: string
  }
}
