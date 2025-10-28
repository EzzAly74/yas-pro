import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantListsComponent } from './important-lists.component';

describe('ImportantListsComponent', () => {
  let component: ImportantListsComponent;
  let fixture: ComponentFixture<ImportantListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportantListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
