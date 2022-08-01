import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsPopUpComponent } from './contact-us-pop-up.component';

describe('ContactUsPopUpComponent', () => {
  let component: ContactUsPopUpComponent;
  let fixture: ComponentFixture<ContactUsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
