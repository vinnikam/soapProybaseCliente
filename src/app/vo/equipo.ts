export class Equipo {
  serial: number;
  nombre: string;
  descripcion: string;

  constructor(serial: number, nombre: string, descripcion: string) {
    this.serial = serial;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}
