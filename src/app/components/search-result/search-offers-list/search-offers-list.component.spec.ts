import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOffersListComponent } from './search-offers-list.component';

describe('SearchOffersListComponent', () => {
  let component: SearchOffersListComponent;
  let fixture: ComponentFixture<SearchOffersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOffersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
