import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CuentaAhorroService } from '../../services/cuenta-ahorro.service';
//roy
@Component({
  selector: 'app-deposito-cuenta',
  templateUrl: './deposito-cuenta.component.html',
  styleUrls: ['./deposito-cuenta.component.css']
})
export class DepositoCuentaComponent implements OnInit {
  depositoForm: FormGroup;
  mensaje: string = '';
  saldo: number | null = null;

  constructor(private fb: FormBuilder, private cuentaAhorroService: CuentaAhorroService) {
    this.depositoForm = this.fb.group({
      numeroCuenta: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      monto: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.obtenerSaldo();
  }

  obtenerSaldo() {
    const numeroCuenta = this.depositoForm.get('numeroCuenta')?.value;
    if (numeroCuenta) {
      this.cuentaAhorroService.obtenerSaldo(numeroCuenta).subscribe(
        (res: { saldo: number }) => {
          this.saldo = res.saldo;
        },
        (err: any) => {
          console.error('Error obteniendo saldo:', err);
          this.saldo = null;
        }
      );
    }
  }

  realizarDeposito() {
    if (this.depositoForm.valid) {
      const { numeroCuenta, monto } = this.depositoForm.value;
      this.cuentaAhorroService.depositar(numeroCuenta, monto).subscribe(
        (res: { message: string }) => {
          this.mensaje = res.message;
          this.depositoForm.reset();
          this.obtenerSaldo();
        },
        (err: any) => {
          this.mensaje = 'Error al procesar el depósito';
        }
      );
    }
  }

  validarMonto(event: any) {
    let valor = event.target.value;
    valor = valor.replace(/[^0-9]/g, '');
    this.depositoForm.patchValue({ monto: valor });
  }
}
