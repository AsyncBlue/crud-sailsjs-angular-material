import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertUpdatePassComponent } from './alert-update-pass.component';

describe('AlertUpdatePassComponent', () => {
  let component: AlertUpdatePassComponent;
  let fixture: ComponentFixture<AlertUpdatePassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertUpdatePassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertUpdatePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
