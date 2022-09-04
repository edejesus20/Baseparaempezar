/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MantenimientoComponent } from './mantenimiento.component';

describe('MantenimientoComponent', () => {
  let component: MantenimientoComponent;
  let fixture: ComponentFixture<MantenimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
