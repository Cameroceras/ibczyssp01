/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediasearchComponent } from './mediasearch.component';

describe('MediasearchComponent', () => {
  let component: MediasearchComponent;
  let fixture: ComponentFixture<MediasearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediasearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediasearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
