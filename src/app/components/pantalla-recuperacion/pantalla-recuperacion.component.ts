import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AdvertenciaService } from '../../services/advertencia.service';

@Component({
  selector: 'app-pantalla-recuperacion',
  templateUrl: './pantalla-recuperacion.component.html',
  styleUrls: ['./pantalla-recuperacion.component.css']
})
export class PantallaRecuperacionComponent {
  correo: string = '';
  mensaje: string = '';
  mostrarMensaje: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private advertenciaService: AdvertenciaService // Inyección del servicio
  ) {}

  autenticacion() {
    if (!this.correo) {
      this.mensaje = 'Por favor, ingrese su correo electrónico';
      this.mostrarMensaje = true;
      this.advertenciaService.mostrarError('Error', this.mensaje); // Usando el servicio para mostrar el error
      return;
    }

    this.authService.recoverPassword(this.correo).subscribe(
      (response) => {
        this.mensaje = `Contraseña temporal: ${response.tempPassword}`;
        this.mostrarMensaje = true;
      },
      (error) => {
        this.mensaje = error.error?.error || 'Error al recuperar la contraseña Porfavor ingresa un correo electronico valido ';
        
        this.advertenciaService.mostrarError('Error', this.mensaje); // Usando el servicio para mostrar el error
      }
    );
  }
  
}
