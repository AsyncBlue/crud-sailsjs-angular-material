import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNuevoFuncionarioComponent } from './crear-nuevo-funcionario.component';

describe('CrearNuevoFuncionarioComponent', () => {
  let component: CrearNuevoFuncionarioComponent;
  let fixture: ComponentFixture<CrearNuevoFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNuevoFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNuevoFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
