import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtareaPage } from './txtarea.page';

describe('TxtareaPage', () => {
  let component: TxtareaPage;
  let fixture: ComponentFixture<TxtareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
