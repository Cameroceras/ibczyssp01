/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediamgComponent } from './mediamg.component';

describe('MediamgComponent', () => {
  let component: MediamgComponent;
  let fixture: ComponentFixture<MediamgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediamgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediamgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
