/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccLevelComponent } from './accLevel.component';

describe('AccLevelComponent', () => {
  let component: AccLevelComponent;
  let fixture: ComponentFixture<AccLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccLevelComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
