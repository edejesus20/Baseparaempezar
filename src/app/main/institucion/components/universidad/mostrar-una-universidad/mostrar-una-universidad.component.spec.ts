import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarUnaUniversidadComponent } from './mostrar-una-universidad.component';

describe('MostrarUnaUniversidadComponent', () => {
  let component: MostrarUnaUniversidadComponent;
  let fixture: ComponentFixture<MostrarUnaUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarUnaUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarUnaUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
