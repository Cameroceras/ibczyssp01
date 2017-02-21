/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdverttableComponent } from './adverttable.component';

describe('AdverttableComponent', () => {
  let component: AdverttableComponent;
  let fixture: ComponentFixture<AdverttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
