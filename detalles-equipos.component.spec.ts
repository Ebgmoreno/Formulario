import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEquiposComponent } from './detalles-equipos.component';

describe('DetallesEquiposComponent', () => {
  let component: DetallesEquiposComponent;
  let fixture: ComponentFixture<DetallesEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesEquiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
