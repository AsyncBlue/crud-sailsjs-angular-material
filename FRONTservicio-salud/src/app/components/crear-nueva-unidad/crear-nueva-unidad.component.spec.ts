import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNuevaUnidadComponent } from './crear-nueva-unidad.component';

describe('CrearNuevaUnidadComponent', () => {
  let component: CrearNuevaUnidadComponent;
  let fixture: ComponentFixture<CrearNuevaUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNuevaUnidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNuevaUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
