import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUnidadComponent } from './update-unidad.component';

describe('UpdateUnidadComponent', () => {
  let component: UpdateUnidadComponent;
  let fixture: ComponentFixture<UpdateUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUnidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
