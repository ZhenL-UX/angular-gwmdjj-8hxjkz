/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccListViewComponent } from './accListView.component';

describe('AccListViewComponent', () => {
  let component: AccListViewComponent;
  let fixture: ComponentFixture<AccListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccListViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
