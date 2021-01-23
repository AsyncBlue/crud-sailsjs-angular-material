import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNuevoPacienteComponent } from './crear-nuevo-paciente.component';

describe('CrearNuevoPacienteComponent', () => {
  let component: CrearNuevoPacienteComponent;
  let fixture: ComponentFixture<CrearNuevoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNuevoPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNuevoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
