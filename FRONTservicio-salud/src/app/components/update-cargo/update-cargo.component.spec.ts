import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCargoComponent } from './update-cargo.component';

describe('UpdateCargoComponent', () => {
  let component: UpdateCargoComponent;
  let fixture: ComponentFixture<UpdateCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
