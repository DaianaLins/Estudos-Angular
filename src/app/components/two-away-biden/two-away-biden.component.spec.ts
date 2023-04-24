import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAwayBidenComponent } from './two-away-biden.component';

describe('TwoAwayBidenComponent', () => {
  let component: TwoAwayBidenComponent;
  let fixture: ComponentFixture<TwoAwayBidenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoAwayBidenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoAwayBidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
