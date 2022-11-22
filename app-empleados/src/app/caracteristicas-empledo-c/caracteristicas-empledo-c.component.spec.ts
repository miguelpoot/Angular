import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpledoCComponent } from './caracteristicas-empledo-c.component';

describe('CaracteristicasEmpledoCComponent', () => {
  let component: CaracteristicasEmpledoCComponent;
  let fixture: ComponentFixture<CaracteristicasEmpledoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasEmpledoCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasEmpledoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
