import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodsComponent } from './contact-methods.component';

describe('ContactMethodsComponent', () => {
  let component: ContactMethodsComponent;
  let fixture: ComponentFixture<ContactMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
