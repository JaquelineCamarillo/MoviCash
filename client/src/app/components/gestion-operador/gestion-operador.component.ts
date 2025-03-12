import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-operador',
  templateUrl: './gestion-operador.component.html',
  styleUrls: ['./gestion-operador.component.css']
})
export class GestionOperadorComponent {
  isEditing: boolean = false;
  editingIndex: number | null = null;
  searchQuery: string = '';
  operadores: any[] = [];
  filteredOperadores: any[] = [];
  errorMessage: string = '';

  operador = {
    RFC: '',
    NombrePersonal: '',
    ApPaterno: '',
    ApMaterno: '',
    Sexo: '',
    FechaNacimiento: '',
    CorreoElectronico: '',
    Password: '',
    FechaCreacion: '',
    Estado: '',
    Direccion: {
      NumeroInterior: '',
      NumeroExterior: '',
      Calle: '',
      Colonia: '',
      Ciudad: ''
    },
    Telefono: [{ Numero: '' }]
  };

  constructor() {
    this.updateFilteredList();
  }

  // Método para validar RFC (Exactamente 13 caracteres y siempre en mayúsculas)
  validateRFC() {
    this.operador.RFC = this.operador.RFC.toUpperCase();
    if (this.operador.RFC.length !== 13) {
      this.errorMessage = 'El RFC debe contener exactamente 13 caracteres.';
      return false;
    }
    return true;
  }

  // Validar que la fecha de nacimiento sea al menos 18 años atrás
  validateFechaNacimiento() {
    const fechaNacimiento = new Date(this.operador.FechaNacimiento);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const cumpleEnEsteAño = hoy.setFullYear(hoy.getFullYear() - edad) >= fechaNacimiento.getTime();
    if (edad < 18 || (edad === 18 && !cumpleEnEsteAño)) {
      this.errorMessage = 'Debes tener al menos 18 años de edad.';
      return false;
    }
    return true;
  }

  // Validar contraseña (mínimo 8 caracteres, al menos una mayúscula y un número)
  validatePassword() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(this.operador.Password)) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula y un número.';
      return false;
    }
    return true;
  }

  // Validar teléfonos (exactamente 10 dígitos, solo números)
  validatePhones() {
    for (let tel of this.operador.Telefono) {
      if (!/^\d{10}$/.test(tel.Numero)) {
        this.errorMessage = 'Cada número de teléfono debe tener exactamente 10 dígitos y no contener letras.';
        return false;
      }
    }
    return true;
  }

  // Validar campos obligatorios
  validateRequiredFields() {
    const requiredFields: (keyof typeof this.operador)[] = [
      'RFC', 'NombrePersonal', 'ApPaterno', 'Sexo', 'FechaNacimiento', 'CorreoElectronico', 'Password', 'FechaCreacion', 'Estado'
    ];
  
    for (let field of requiredFields) {
      if (!this.operador[field]) {
        this.errorMessage = `El campo ${field} no puede estar vacío.`;
        return false;
      }
    }
  
    const requiredAddressFields: (keyof typeof this.operador.Direccion)[] = ['NumeroExterior', 'Calle', 'Colonia', 'Ciudad'];
  
    for (let field of requiredAddressFields) {
      if (!this.operador.Direccion[field]) {
        this.errorMessage = `El campo ${field} de la dirección no puede estar vacío.`;
        return false;
      }
    }
  
    return true;
  }

  // Método principal para validar antes de guardar
  validateForm() {
    this.errorMessage = '';

    if (!this.validateRFC() || !this.validateFechaNacimiento() || !this.validatePassword() || !this.validatePhones() || !this.validateRequiredFields()) {
      alert(this.errorMessage);
      return false;
    }
    return true;
  }

  // Método para agregar o modificar un operador
  onSubmit() {
    if (!this.validateForm()) return;

    if (this.isEditing && this.editingIndex !== null) {
      this.operadores[this.editingIndex] = { ...this.operador };
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      this.operadores.push({ ...this.operador });
    }
    this.resetForm();
    this.updateFilteredList();
    alert('Operador guardado correctamente');
  }

  // Método para eliminar un operador
  deleteOperador(operadorToDelete: any) {
    const index = this.operadores.findIndex(operador => operador.RFC === operadorToDelete.RFC);
    if (index !== -1) {
      this.operadores.splice(index, 1);
      this.updateFilteredList();
      alert('Operador eliminado correctamente');
    }
  }

  // Método para buscar un operador
  search() {
    this.filteredOperadores = this.operadores.filter(operador =>
      operador.NombrePersonal.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      operador.RFC.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      operador.CorreoElectronico.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Método para editar un operador
  editOperador(operador: any) {
    this.operador = { ...operador };
    this.isEditing = true;
    this.editingIndex = this.operadores.findIndex(o => o.RFC === operador.RFC);
  }

  // Método para cancelar la edición y limpiar el formulario
  cancelEdit() {
    this.resetForm();
    this.isEditing = false;
    this.editingIndex = null;
  }

  // Resetear formulario
  resetForm() {
    this.operador = {
      RFC: '',
      NombrePersonal: '',
      ApPaterno: '',
      ApMaterno: '',
      Sexo: '',
      FechaNacimiento: '',
      CorreoElectronico: '',
      Password: '',
      FechaCreacion: '',
      Estado: '',
      Direccion: {
        NumeroInterior: '',
        NumeroExterior: '',
        Calle: '',
        Colonia: '',
        Ciudad: ''
      },
      Telefono: [{ Numero: '' }]
    };
  }

  // Actualizar lista filtrada
  updateFilteredList() {
    this.filteredOperadores = [...this.operadores];
  }

  // Método para agregar un número de teléfono
  addPhone() {
    this.operador.Telefono.push({ Numero: '' });
  }

  // Método para eliminar un número de teléfono
  removePhone(index: number) {
    if (this.operador.Telefono.length > 1) {
      this.operador.Telefono.splice(index, 1);
    }
  }
}
