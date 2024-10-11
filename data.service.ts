import { Injectable } from '@angular/core';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formDataArray: Data[] = [];

  constructor() {
    this.cargarDatos();
  }

  private cargarDatos() {
    const storedData = localStorage.getItem('formDataArray');
    if (storedData) {
      this.formDataArray = JSON.parse(storedData);
    }
  }

  guardarDatos(data: Data): void {
    this.formDataArray.push(data);
    this.actualizarLocalStorage();
  }

  obtenerDatos(): Data[] {
    return this.formDataArray;
  }

  actualizarDatos(serie: string, updatedData: Data): void {
    const index = this.formDataArray.findIndex(equipo => equipo.serie === serie);
    if (index !== -1) {
      this.formDataArray[index] = updatedData;
      this.actualizarLocalStorage();
    }
  }

  private actualizarLocalStorage() {
    if (this.formDataArray.length > 10) {
      this.formDataArray.shift();
    }
    localStorage.setItem('formDataArray', JSON.stringify(this.formDataArray));
  }
}
