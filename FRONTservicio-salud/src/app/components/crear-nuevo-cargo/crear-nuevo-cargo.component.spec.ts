import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNuevoCargoComponent } from './crear-nuevo-cargo.component';

describe('CrearNuevoCargoComponent', () => {
  let component: CrearNuevoCargoComponent;
  let fixture: ComponentFixture<CrearNuevoCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNuevoCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNuevoCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
