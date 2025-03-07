import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GestionAdminComponent } from './gestion-admin.component';

describe('GestionAdminComponent', () => {
  let component: GestionAdminComponent;
  let fixture: ComponentFixture<GestionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionAdminComponent],
      imports: [FormsModule] // Se requiere para el uso de [(ngModel)]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inicializar los valores predeterminados correctamente', () => {
    expect(component.admins).toEqual([]);
    expect(component.filteredAdmins).toEqual([]);
    expect(component.searchQuery).toBe('');
    expect(component.isEditing).toBeFalse();
    expect(component.editingIndex).toBeNull();
    expect(component.admin.RFC).toBe('');
  });

  it('Debe ejecutar correctamente el método search', () => {
    component.admins = [
      { RFC: 'RFC1', NombrePersonal: 'Juan Pérez', CorreoElectronico: 'juan@example.com', FechaCreacion: '2025-03-01' },
      { RFC: 'RFC2', NombrePersonal: 'Ana López', CorreoElectronico: 'ana@example.com', FechaCreacion: '2025-03-02' }
    ];

    component.searchQuery = 'Ana';
    component.search();
    
    expect(component.filteredAdmins.length).toBe(1);
    expect(component.filteredAdmins[0].NombrePersonal).toBe('Ana López');
  });

  it('Debe agregar un nuevo administrador correctamente', () => {
    const initialLength = component.admins.length;
    component.admin = {
      RFC: 'RFC123456',
      NombrePersonal: 'Nuevo Admin',
      ApPaterno: 'Apellido1',
      ApMaterno: 'Apellido2',
      Sexo: 'Masculino',
      FechaNacimiento: '1990-01-01',
      CorreoElectronico: 'nuevo@example.com',
      Password: 'password123',
      FechaCreacion: '2025-03-05',
      Estado: 'Activo',
      Direccion: {
        NumeroInterior: '',
        NumeroExterior: '45A',
        Calle: 'Calle Nueva',
        Colonia: 'Colonia Nueva',
        Ciudad: 'Ciudad Nueva'
      },
      Telefono: [{ Numero: '1234567890' }]
    };

    component.onSubmit();
    expect(component.admins.length).toBe(initialLength + 1);
    expect(component.admins[component.admins.length - 1].NombrePersonal).toBe('Nuevo Admin');
  });

  it('Debe eliminar un administrador correctamente', () => {
    component.admins = [
      { RFC: 'RFC1', NombrePersonal: 'Admin 1', CorreoElectronico: 'admin1@example.com', FechaCreacion: '2025-03-01' },
      { RFC: 'RFC2', NombrePersonal: 'Admin 2', CorreoElectronico: 'admin2@example.com', FechaCreacion: '2025-03-02' }
    ];
    component.editingIndex = 0;
    component.deleteAdmin(new Event('click'));

    expect(component.admins.length).toBe(1);
    expect(component.admins[0].NombrePersonal).toBe('Admin 2'); // El primer administrador fue eliminado
  });

  it('Debe editar un administrador y cargar los datos correctamente', () => {
    const adminToEdit = {
      RFC: 'XYZ123',
      NombrePersonal: 'Admin Editado',
      ApPaterno: 'ApellidoEditado',
      ApMaterno: 'Apellido2',
      Sexo: 'Femenino',
      FechaNacimiento: '1985-06-15',
      CorreoElectronico: 'editado@example.com',
      Password: 'editpass',
      FechaCreacion: '2025-03-03',
      Estado: 'Activo',
      Direccion: {
        NumeroInterior: '2B',
        NumeroExterior: '12A',
        Calle: 'Calle Editada',
        Colonia: 'Colonia Editada',
        Ciudad: 'Ciudad Editada'
      },
      Telefono: [{ Numero: '1112223333' }]
    };

    component.editAdmin(adminToEdit);

    expect(component.isEditing).toBeTrue();
    expect(component.admin.NombrePersonal).toBe('Admin Editado');
    expect(component.admin.CorreoElectronico).toBe('editado@example.com');
    expect(component.admin.Direccion.Calle).toBe('Calle Editada');
  });

  it('Debe cancelar la edición y limpiar el formulario', () => {
    component.isEditing = true;
    component.admin = {
      RFC: 'XYZ789',
      NombrePersonal: 'Editando',
      ApPaterno: 'Temporal',
      ApMaterno: 'Modificado',
      Sexo: 'Femenino',
      FechaNacimiento: '1990-05-20',
      CorreoElectronico: 'temp@example.com',
      Password: 'temppass',
      FechaCreacion: '2025-03-04',
      Estado: 'Bloqueado',
      Direccion: {
        NumeroInterior: '',
        NumeroExterior: '33X',
        Calle: 'Temporal Calle',
        Colonia: 'Temporal Colonia',
        Ciudad: 'Temporal Ciudad'
      },
      Telefono: [{ Numero: '1231231234' }]
    };

    component.cancelEdit();

    expect(component.isEditing).toBeFalse();
    expect(component.admin.NombrePersonal).toBe('');
    expect(component.admin.Telefono.length).toBe(1); // Se reinicia a un solo teléfono vacío
  });

  it('Debe agregar un número de teléfono correctamente', () => {
    const initialLength = component.admin.Telefono.length;
    component.addPhone();
    expect(component.admin.Telefono.length).toBe(initialLength + 1);
  });

  it('Debe eliminar un número de teléfono correctamente', () => {
    component.admin.Telefono = [{ Numero: '1111111111' }, { Numero: '2222222222' }];
    component.removePhone(0);
    expect(component.admin.Telefono.length).toBe(1);
    expect(component.admin.Telefono[0].Numero).toBe('2222222222');
  });
});
