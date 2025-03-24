import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  private apiUrlOperator = 'http://localhost:8090/operator';   // Ruta base para operaciones sobre operadores

  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo operador
  registrarOperador(operador: any): Observable<any> {
    return this.http.post('http://localhost:8090/auth/registrar', operador); // Esta URL es para registro
  }

  // Método para obtener todos los operadores
  getOperadores(): Observable<any> {
    return this.http.get(this.apiUrlOperator);
  }

  // Método para buscar un operador por RFC
  buscarOperadorPorRFC(RFC: string): Observable<any> {
    return this.http.get(`${this.apiUrlOperator}/${RFC}`);
  }

  // Método para actualizar un operador
  editarOperador(operador: any): Observable<any> {
    return this.http.put(`${this.apiUrlOperator}/${operador.RFC}`, operador);
  }

  // Método para eliminar un operador
  eliminarOperador(RFC: string): Observable<any> {
    return this.http.delete(`${this.apiUrlOperator}/${RFC}`);
  }
}
