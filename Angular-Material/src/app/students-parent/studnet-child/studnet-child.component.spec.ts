import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudnetChildComponent } from './studnet-child.component';

describe('StudnetChildComponent', () => {
  let component: StudnetChildComponent;
  let fixture: ComponentFixture<StudnetChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudnetChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudnetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
