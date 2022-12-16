import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymethodsFormComponent } from './paymethods-form.component';

describe('PaymethodsFormComponent', () => {
  let component: PaymethodsFormComponent;
  let fixture: ComponentFixture<PaymethodsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymethodsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymethodsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
