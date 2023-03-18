import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAddedSuccessfullyComponent } from './offer-added-successfully.component';

describe('OfferAddedSuccessfullyComponent', () => {
  let component: OfferAddedSuccessfullyComponent;
  let fixture: ComponentFixture<OfferAddedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferAddedSuccessfullyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferAddedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
