import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltOrdenantesComponent } from './alt-ordenantes.component';

describe('AltOrdenantesComponent', () => {
  let component: AltOrdenantesComponent;
  let fixture: ComponentFixture<AltOrdenantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltOrdenantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltOrdenantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
