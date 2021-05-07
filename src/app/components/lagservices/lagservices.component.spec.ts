import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagservicesComponent } from './lagservices.component';

describe('LagservicesComponent', () => {
  let component: LagservicesComponent;
  let fixture: ComponentFixture<LagservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LagservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LagservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
