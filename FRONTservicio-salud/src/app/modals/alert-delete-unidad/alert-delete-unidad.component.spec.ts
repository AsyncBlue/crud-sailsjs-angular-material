import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeleteUnidadComponent } from './alert-delete-unidad.component';

describe('AlertDeleteUnidadComponent', () => {
  let component: AlertDeleteUnidadComponent;
  let fixture: ComponentFixture<AlertDeleteUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDeleteUnidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeleteUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
