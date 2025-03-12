import { Component, OnInit } from '@angular/core';
//roy
@Component({
  selector: 'app-cuenta-dialog',
  templateUrl: './cuenta-dialog.component.html',
  styleUrls: ['./cuenta-dialog.component.css']
})
export class CuentaDialogComponent implements OnInit {
  numeroCuenta: string = '';
  saldo: number = 0;

  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    this.numeroCuenta = params.get('numeroCuenta') || '';
    this.saldo = Number(params.get('saldo')) || 0;
  }

  guardarCambios() {
    alert(`Cuenta modificada:\nNúmero: ${this.numeroCuenta}\nSaldo: ${this.saldo}`);
    window.close();
  }

  cerrarDialog() {
    window.close();
  }
}
