import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfferItemComponent } from './search-offer-item.component';

describe('SearchOfferItemComponent', () => {
  let component: SearchOfferItemComponent;
  let fixture: ComponentFixture<SearchOfferItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOfferItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
