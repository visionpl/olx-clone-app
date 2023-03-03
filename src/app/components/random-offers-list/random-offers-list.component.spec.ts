import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomOffersListComponent } from './random-offers-list.component';

describe('RandomOffersListComponent', () => {
  let component: RandomOffersListComponent;
  let fixture: ComponentFixture<RandomOffersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomOffersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomOffersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
