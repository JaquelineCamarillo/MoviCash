import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaAhorroService {
  private apiUrl = 'https://api.banco.com';

  constructor(private http: HttpClient) {}

  depositar(numeroCuenta: string, monto: number): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/depositar`, { numeroCuenta, monto });
  }

  obtenerSaldo(numeroCuenta: string): Observable<{ saldo: number }> {
    return this.http.get<{ saldo: number }>(`${this.apiUrl}/saldo?numeroCuenta=${numeroCuenta}`);
  }
}
