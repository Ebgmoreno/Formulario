import { TestBed } from '@angular/core/testing';

import { EquipoDetallesService } from './equipo-detalles.service';

describe('EquipoDetallesService', () => {
  let service: EquipoDetallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipoDetallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
