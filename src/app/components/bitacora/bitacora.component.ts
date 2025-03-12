import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bitacora',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent {

 
  transaccionesPendientes = [
    { 
      IdComprobante: "1001", 
      NombreCompletoOrdenante: "Carlos Ramírez", 
      NombreCompletoBeneficiario: "Ana González", 
      Monto: 500, 
      Estado: "Pendiente", 
      Fecha: new Date("2025-03-05T10:30:00"), 
      Concepto: "Transferencia para pago de servicios"
    },
    { 
      IdComprobante: "1002", 
      NombreCompletoOrdenante: "Luis Pérez", 
      NombreCompletoBeneficiario: "Pedro Sánchez", 
      Monto: 1200, 
      Estado: "Exitoso", 
      Fecha: new Date("2025-03-05T11:00:00"), 
      Concepto: "Pago de compra en línea",
      Tipo: 'Transferencia'
    }
  ];

  transactionDetails: any = {};
  modalVisible: boolean = false;
  selectedTransaction: any = null;


  showTransactionInfo(transaccion: any) {
    this.transactionDetails = transaccion;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }
  hideTransactionInfo(): void {
    this.selectedTransaction = null;
  }
}
