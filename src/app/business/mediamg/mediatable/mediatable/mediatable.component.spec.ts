/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediatableComponent } from './mediatable.component';

describe('MediatableComponent', () => {
  let component: MediatableComponent;
  let fixture: ComponentFixture<MediatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
