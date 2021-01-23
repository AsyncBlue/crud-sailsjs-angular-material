import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeleteCargoComponent } from './alert-delete-cargo.component';

describe('AlertDeleteCargoComponent', () => {
  let component: AlertDeleteCargoComponent;
  let fixture: ComponentFixture<AlertDeleteCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDeleteCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeleteCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
