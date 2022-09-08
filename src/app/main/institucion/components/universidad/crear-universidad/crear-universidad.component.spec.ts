import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUniversidadComponent } from './crear-universidad.component';

describe('CrearUniversidadComponent', () => {
  let component: CrearUniversidadComponent;
  let fixture: ComponentFixture<CrearUniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
