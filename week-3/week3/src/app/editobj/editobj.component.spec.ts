import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditobjComponent } from './editobj.component';

describe('EditobjComponent', () => {
  let component: EditobjComponent;
  let fixture: ComponentFixture<EditobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
