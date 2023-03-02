import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBoxComponent } from './single-offer.component';

describe('OfferBoxComponent', () => {
  let component: OfferBoxComponent;
  let fixture: ComponentFixture<OfferBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
