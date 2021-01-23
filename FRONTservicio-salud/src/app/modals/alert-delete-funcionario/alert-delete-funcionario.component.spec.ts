import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDeleteFuncionarioComponent } from './alert-delete-funcionario.component';

describe('AlertDeleteFuncionarioComponent', () => {
  let component: AlertDeleteFuncionarioComponent;
  let fixture: ComponentFixture<AlertDeleteFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDeleteFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDeleteFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
