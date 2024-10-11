import { Injectable } from '@angular/core';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoDetallesService {
  private equipo: Data | null = null;

  guardarEquipo(equipo: Data): void {
    this.equipo = equipo;
  }

  obtenerEquipo(): Data | null {
    return this.equipo;
  }
}
