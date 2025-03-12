import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AdvertenciaService } from '../../services/advertencia.service';

@Component({
  selector: 'app-pantalla-verificacion-codigo',
  templateUrl: './pantalla-verificacion-codigo.component.html',
  styleUrls: ['./pantalla-verificacion-codigo.component.css']
})
export class PantallaVerificacionCodigoComponent implements OnInit, OnDestroy {

  @ViewChildren('codeInput0, codeInput1, codeInput2, codeInput3, codeInput4, codeInput5') 
  codeInputs!: QueryList<ElementRef>;

  private timer: any;
  private timeLeft: number = 360; // 6 minutes in seconds
  correo: string = '';  // Suponiendo que el correo ya está guardado desde el login
  code: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private advertenciaService: AdvertenciaService
  ) {}

  ngOnInit() {
    this.startTimer();
    this.correo = localStorage.getItem('userEmail') || '';  // Recuperar el correo al iniciar el componente
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateTimerDisplay();
      } else {
        clearInterval(this.timer);
        this.advertenciaService.mostrarError('Código Expirado', 'El código ha expirado. Por favor solicite uno nuevo.');
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    const display = document.getElementById('timer');
    if (display) {
      display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  onInputChange(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value && !/^[a-zA-Z0-9]+$/.test(value)) {
      input.value = '';
      return;
    }

    const inputs = this.codeInputs.toArray();
    if (value && index < inputs.length - 1) {
      inputs[index + 1].nativeElement.focus();
    }
    if (value === '' && index > 0) {
      inputs[index - 1].nativeElement.focus();
    }
    this.checkCompleteCode();
  }

  checkCompleteCode() {
    const inputs = this.codeInputs.toArray();
    const code = inputs.map(input => input.nativeElement.value).join('');
    if (code.length === 6 && /^[a-zA-Z0-9]+$/.test(code)) {
      this.code = code;
    }
  }

  verificarCodigo() {
    if (!this.correo) {
      this.correo = localStorage.getItem('userEmail') || '';
    }

    this.authService.verificarCodigo(this.correo, this.code).subscribe(
      (response) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          const decodedToken: any = jwtDecode(response.token);
          const userRole = decodedToken.role;
          this.errorMessage = '';

          switch (userRole) {
            case 'Admin':
              this.router.navigate(['/pantalla-admin']);
              break;
            case 'Ordenante':
              this.router.navigate(['/pantalla-Ordenante']);
              break;
            
          }
        } else {
          this.errorMessage = 'Error al recibir el token. Inténtelo de nuevo.';
          this.successMessage = '';
          this.advertenciaService.mostrarError('Error', this.errorMessage);
        }
      },
      (error) => {
        this.errorMessage = 'Código incorrecto o expirado. Por favor, inténtalo nuevamente.';
        this.successMessage = '';
        this.advertenciaService.mostrarError('Error de Verificación', this.errorMessage);
      }
    );
  }
}