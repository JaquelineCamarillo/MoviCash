import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaGestionOrdenanteComponent } from './pantalla-gestion-ordenante.component';

describe('PantallaGestionOrdenanteComponent', () => {
  let component: PantallaGestionOrdenanteComponent;
  let fixture: ComponentFixture<PantallaGestionOrdenanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaGestionOrdenanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaGestionOrdenanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
