/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuInfoComponent } from './menuInfo.component';

describe('MenuInfoComponent', () => {
  let component: MenuInfoComponent;
  let fixture: ComponentFixture<MenuInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuInfoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
