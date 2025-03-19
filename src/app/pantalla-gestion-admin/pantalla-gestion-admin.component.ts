import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-gestion-admin',
  templateUrl: './pantalla-gestion-admin.component.html',
  styleUrls: ['./pantalla-gestion-admin.component.css']
})
export class PantallaGestionAdminComponent implements OnInit {
  isEditing: boolean = false;
  editingIndex: number | null = null;
  searchQuery: string = '';
  admins: any[] = [];
  filteredAdmins: any[] = [];
  errorMessage: string = '';

  admin = {
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

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins() {
    this.adminService.getAllAdmins().subscribe(
      (data) => {
        if (data && Array.isArray(data.data)) {
          this.admins = data.data;  // Aquí accedemos a la propiedad `data`
        } else {
          console.error('Datos inválidos recibidos para admins:', data);
          this.admins = [];
        }
        this.updateFilteredList();
      },
      (error) => {
        console.error('Error al cargar administradores', error);
        this.admins = [];
      }
    );
  }
  

  onSubmit() {
    if (this.isEditing && this.editingIndex !== null) {
      this.adminService.updateAdmin(this.admin.RFC, this.admin).subscribe(
        () => {
          this.loadAdmins();
          this.cancelEdit();
        },
        (error) => {
          console.error('Error al actualizar administrador:', error);
        }
      );
    } else {
     
    }
  }

  editAdmin(admin: any) {
    this.admin = { ...admin };
    this.isEditing = true;
  }

  deleteAdmin(admin: any) {
    if (confirm(`¿Estás seguro de eliminar a ${admin.NombrePersonal}?`)) {
      this.adminService.deleteAdmin(admin.RFC).subscribe(
        () => this.loadAdmins(),
        (error) => console.error('Error al eliminar administrador:', error)
      );
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.resetForm();
  }

  resetForm() {
    this.admin = {
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

  search() {
    this.filteredAdmins = this.admins.filter(admin =>
      admin.NombrePersonal.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      admin.RFC.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  updateFilteredList() {
    if (Array.isArray(this.admins)) {
      this.filteredAdmins = [...this.admins];
    } else {
      console.error('this.admins no es un array válido:', this.admins);
      this.filteredAdmins = [];
    }
  }
}
