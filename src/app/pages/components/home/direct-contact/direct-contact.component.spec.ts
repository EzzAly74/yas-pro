import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectContactComponent } from './direct-contact.component';

describe('DirectContactComponent', () => {
  let component: DirectContactComponent;
  let fixture: ComponentFixture<DirectContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
