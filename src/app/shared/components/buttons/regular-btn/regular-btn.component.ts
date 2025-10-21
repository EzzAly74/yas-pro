import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-regular-btn',
  imports: [CommonModule],
  templateUrl: './regular-btn.component.html',
  styleUrl: './regular-btn.component.scss',
})
export class RegularBtnComponent {
  @Input({ required: true }) config!: {
    type: string;
    label: string;
    icon?: string;
    radius: number;
    href?: string;
    styleType: string;
    width?: number;
    height?: number;
  };
  safeIcon: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.config?.icon) {
      this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(this.config.icon);
    }
  }
}
