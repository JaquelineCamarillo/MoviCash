import { Component } from '@angular/core';
//roy
@Component({
  selector: 'app-gestion-ordenantes',
  templateUrl: './gestion-ordenantes.component.html',
  styleUrls: ['./gestion-ordenantes.component.css']
})
export class GestionOrdenantesComponent {
  ordenantes = [
    {
      id: '1',
      NombreOrdenante: 'Juan',
      ApPaterno: 'Pérez',
      ApMaterno: 'Gómez',
      RFC: 'JUAN123',
      Telefono: [{ Numero: '555-1234' }],
      Cuenta: { NumeroCuenta: '12345678', Saldo: 5000 },
      Direccion: { Calle: 'Av. Siempre Viva', Numero: '742', Ciudad: 'Springfield' }
    },
    {
      id: '2',
      NombreOrdenante: 'Ana',
      ApPaterno: 'López',
      ApMaterno: 'Martínez',
      RFC: 'ANA456',
      Telefono: [{ Numero: '555-5678' }],
      Cuenta: { NumeroCuenta: '87654321', Saldo: 2500 },
      Direccion: { Calle: 'Calle Juarez', Numero: '123', Ciudad: 'Queretaro' }
    }
  ];

  ordenanteSeleccionado: any = null;

  seleccionarOrdenante(ordenante: any) {
    this.ordenanteSeleccionado = ordenante;
  }

  mostrarCuentaPantalla() {
    if (this.ordenanteSeleccionado) {
      const url = `/cuenta-dialog?numeroCuenta=${this.ordenanteSeleccionado.Cuenta.NumeroCuenta}&saldo=${this.ordenanteSeleccionado.Cuenta.Saldo}`;
      window.open(url, 'Cuenta', 'width=600,height=400');
    } else {
      alert('Selecciona un ordenante primero.');
    }
  }

  mostrarDireccionPantalla() {
    if (this.ordenanteSeleccionado) {
      const url = `/direccion-dialog?calle=${this.ordenanteSeleccionado.Direccion.Calle}&numero=${this.ordenanteSeleccionado.Direccion.Numero}&ciudad=${this.ordenanteSeleccionado.Direccion.Ciudad}`;
      window.open(url, 'Dirección', 'width=600,height=400');
    } else {
      alert('Selecciona un ordenante primero.');
    }
  }

  buscarOrdenante() {
    console.log('Buscar ordenante ejecutado.');
  }

  modificarOrdenante() {
    console.log('Modificar ordenante ejecutado.');
  }

  eliminarOrdenante() {
    console.log('Eliminar ordenante ejecutado.');
  }
}
