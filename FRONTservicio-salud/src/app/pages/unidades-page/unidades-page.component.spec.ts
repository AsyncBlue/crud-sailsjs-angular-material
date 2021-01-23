import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesPageComponent } from './unidades-page.component';

describe('UnidadesPageComponent', () => {
  let component: UnidadesPageComponent;
  let fixture: ComponentFixture<UnidadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
