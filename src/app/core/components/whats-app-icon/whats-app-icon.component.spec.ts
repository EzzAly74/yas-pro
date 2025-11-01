import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppIconComponent } from './whats-app-icon.component';

describe('WhatsAppIconComponent', () => {
  let component: WhatsAppIconComponent;
  let fixture: ComponentFixture<WhatsAppIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsAppIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
