import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { Select } from 'primeng/select';
import { OverlayModule } from 'primeng/overlay';
import { RegularBtnComponent } from '../../../../shared/components/buttons/regular-btn/regular-btn.component';

export interface ServiceType {
  id: number;
  name: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    Select,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ButtonModule,
    BadgeModule,
    ProgressBarModule,
    OverlayModule,
    ToastModule,
    CommonModule,
    RegularBtnComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  serviceTypes: ServiceType[] = [];

  selectedServiceType?: ServiceType;
  submitBtn = {
    type: 'button',
    label: 'ارسل الرساله',
    radius: 10,
    styleType: 'regular',
    width: 233,
    height: 51,
    fullWidth: true,
  };

  ngOnInit() {
    this.serviceTypes = [
      { name: 'شكوى', id: 1 },
      { name: 'اقتراح', id: 2 },
      { name: 'شريك معنا', id: 3 },
    ];
  }
  openFileDialog(uploader: FileUpload) {
    const fileInput = uploader.el.nativeElement.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    fileInput?.click();
  }
  onUpload(event: any) {
    console.log('Files uploaded:', event.files);
  }
}
