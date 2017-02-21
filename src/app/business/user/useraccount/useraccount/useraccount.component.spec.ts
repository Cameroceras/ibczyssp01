/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UseraccountComponent } from './useraccount.component';

describe('UseraccountComponent', () => {
  let component: UseraccountComponent;
  let fixture: ComponentFixture<UseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
