/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaaddComponent } from './mediaadd.component';

describe('MediaaddComponent', () => {
  let component: MediaaddComponent;
  let fixture: ComponentFixture<MediaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
