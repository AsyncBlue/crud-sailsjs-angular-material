import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosPageComponent } from './cargos-page.component';

describe('CargosPageComponent', () => {
  let component: CargosPageComponent;
  let fixture: ComponentFixture<CargosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
