import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioAdministradoresComponent } from './cambio-administradores.component';

describe('CambioAdministradoresComponent', () => {
  let component: CambioAdministradoresComponent;
  let fixture: ComponentFixture<CambioAdministradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambioAdministradoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambioAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
