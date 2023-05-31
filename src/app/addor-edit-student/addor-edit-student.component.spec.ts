import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorEditStudentComponent } from './addor-edit-student.component';

describe('AddorEditStudentComponent', () => {
  let component: AddorEditStudentComponent;
  let fixture: ComponentFixture<AddorEditStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorEditStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorEditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
