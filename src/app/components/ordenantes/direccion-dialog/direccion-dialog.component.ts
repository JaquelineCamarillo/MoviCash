import { Component } from '@angular/core';
//roy
@Component({
  selector: 'app-direccion-dialog',
  templateUrl: './direccion-dialog.component.html',
  styleUrls: ['./direccion-dialog.component.css']
})
export class DireccionDialogComponent {
  calle: string = '';
  numero: string = '';
  ciudad: string = '';

  guardarCambios() {
    alert(`Dirección modificada:\nCalle: ${this.calle}\nNúmero: ${this.numero}\nCiudad: ${this.ciudad}`);
    window.close();
  }

  cerrarDialog() {
    window.close();
  }
}
