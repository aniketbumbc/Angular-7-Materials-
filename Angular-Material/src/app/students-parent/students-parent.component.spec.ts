import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsParentComponent } from './students-parent.component';

describe('StudentsParentComponent', () => {
  let component: StudentsParentComponent;
  let fixture: ComponentFixture<StudentsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
