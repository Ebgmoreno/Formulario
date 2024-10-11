import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetallesComponent } from './formulario-detalles.component';

describe('FormularioDetallesComponent', () => {
  let component: FormularioDetallesComponent;
  let fixture: ComponentFixture<FormularioDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
