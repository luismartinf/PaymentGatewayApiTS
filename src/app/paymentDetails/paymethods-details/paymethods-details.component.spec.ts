import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodsDetailsComponent } from './paymethods-details.component';

describe('PaymethodsDetailsComponent', () => {
  let component: PaymethodsDetailsComponent;
  let fixture: ComponentFixture<PaymethodsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymethodsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymethodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
