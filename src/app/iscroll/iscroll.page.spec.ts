import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IscrollPage } from './iscroll.page';

describe('IscrollPage', () => {
  let component: IscrollPage;
  let fixture: ComponentFixture<IscrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IscrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IscrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
