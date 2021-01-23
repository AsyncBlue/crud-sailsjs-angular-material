import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeletePacienteComponent } from './alert-delete-paciente.component';

describe('AlertDeletePacienteComponent', () => {
  let component: AlertDeletePacienteComponent;
  let fixture: ComponentFixture<AlertDeletePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDeletePacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeletePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
