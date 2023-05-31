import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorEditDepartmentComponent } from './addor-edit-department.component';

describe('AddorEditDepartmentComponent', () => {
  let component: AddorEditDepartmentComponent;
  let fixture: ComponentFixture<AddorEditDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorEditDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorEditDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
