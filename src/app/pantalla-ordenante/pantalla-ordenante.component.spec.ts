import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaOrdenanteComponent } from './pantalla-ordenante.component';

describe('PantallaOrdenanteComponent', () => {
  let component: PantallaOrdenanteComponent;
  let fixture: ComponentFixture<PantallaOrdenanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PantallaOrdenanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaOrdenanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
