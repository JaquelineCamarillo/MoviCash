import { Component } from '@angular/core';
import { OrdenanteService } from '../../services/ordenante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-ordenantes',
  templateUrl: './gestion-ordenantes.component.html',
  styleUrls: ['./gestion-ordenantes.component.css']
})
export class GestionOrdenantesComponent {
  ordenantes: any[] = [];
  ordenanteSeleccionado: any = {
    NombreOrdenante: '',
    ApPaterno: '',
    ApMaterno: '',
    Sexo: '',
    FechaNacimiento: '',
    NumeroCuenta: '',
    RFCOperador: '',
    Telefono: [{ Numero: '' }],
    Direccion: {
      Calle: '',
      NumeroExterior: '',
      NumeroInterior: '',
      Colonia: '',
      Ciudad: ''
    },
    FechaRegistro: new Date().toISOString().split('T')[0],
    FechaActualizacion: new Date().toISOString().split('T')[0]
  };

  constructor(private ordenanteService: OrdenanteService, private router: Router) {}

  ngOnInit() {
    this.obtenerOrdenantes();
  }

  obtenerOrdenantes() {
    this.ordenanteService.obtenerOrdenantes().subscribe(
      data => {
        this.ordenantes = data;
      },
      error => {
        console.error('Error al obtener los ordenantes:', error);
        alert(`Error al obtener los ordenantes: ${error}`);
      }
    );
  }

  seleccionarOrdenante(ordenante: any) {
    this.ordenanteSeleccionado = { ...ordenante };
  }

  modificarOrdenante() {
    if (this.ordenanteSeleccionado && this.ordenanteSeleccionado.RFCOperador) {
      // Asegúrate de convertir las fechas a formato ISO 8601
      this.ordenanteSeleccionado.FechaNacimiento = new Date(this.ordenanteSeleccionado.FechaNacimiento).toISOString();
      this.ordenanteSeleccionado.FechaActualizacion = new Date().toISOString(); // Si es la fecha actual

      // Asegúrate de que Telefono sea un array
      if (!Array.isArray(this.ordenanteSeleccionado.Telefono)) {
        this.ordenanteSeleccionado.Telefono = [this.ordenanteSeleccionado.Telefono];
      }

      // Elimina el _id si no es necesario
      delete this.ordenanteSeleccionado._id;

      console.log('Datos a modificar:', this.ordenanteSeleccionado);  // Verifica que los datos sean correctos

      this.ordenanteService.actualizarOrdenante(this.ordenanteSeleccionado.RFCOrdenante, this.ordenanteSeleccionado).subscribe(
        response => {
          console.log('Ordenante actualizado', response);
          alert('Ordenante actualizado');
          this.obtenerOrdenantes();  // Refrescar la lista después de la actualización
        },
        error => {
          console.error('Error al actualizar el ordenante:', error);
          alert(`Error al actualizar el ordenante: ${error.message}`);
        }
      );
    } else {
      alert('Selecciona un ordenante para modificar');
    }
  }

  eliminarOrdenante() {
    if (this.ordenanteSeleccionado && this.ordenanteSeleccionado.RFCOrdenante) {
      this.ordenanteService.eliminarOrdenante(this.ordenanteSeleccionado.RFCOrdenante).subscribe(
        response => {
          console.log('Ordenante eliminado', response);
          alert('Ordenante eliminado');
          this.obtenerOrdenantes();  // Refrescar la lista después de eliminar
        },
        error => {
          console.error('Error al eliminar el ordenante:', error);
          alert(`Error al eliminar el ordenante: ${error}`);
        }
      );
    } else {
      alert('Selecciona un ordenante para eliminar');
    }
  }

  buscarOrdenante() {
    console.log('Buscar ordenante ejecutado.');
    // Lógica para buscar el ordenante
  }
}
