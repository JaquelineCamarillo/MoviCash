import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BitacoraComponent } from '../bitacora/bitacora.component';

@Component({
  selector: 'app-cambio-administradores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cambio-administradores.component.html',
  styleUrl: './cambio-administradores.component.css'
})
export class CambioAdministradoresComponent {
  cambios = [
    { id: 1, fecha: '2025-03-05', usuario: 'Administrador 1', accion: 'Añadir nuevo administrador', descripcion: 'Se añadió un nuevo administrador con privilegios completos.' },
    { id: 2, fecha: '2025-03-06', usuario: 'Administrador 2', accion: 'Eliminar usuario', descripcion: 'Se eliminó un usuario que no cumplía con los requisitos de seguridad.' }
  ];

  showDetails = false;
  selectedCambio: any = null;

  showTransactionInfo(id: number): void {
    this.selectedCambio = this.cambios.find(cambio => cambio.id === id);
    this.showDetails = true;
  }

  closeDetails(): void {
    this.showDetails = false;
    this.selectedCambio = null;
  }

}
