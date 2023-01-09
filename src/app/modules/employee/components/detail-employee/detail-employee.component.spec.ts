import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';

import { EmployeeService } from './../../service/employee.service';
import { DetailEmployeeComponent } from './detail-employee.component';

describe('DetailEmployeeComponent', () => {
  let component: DetailEmployeeComponent;
  let fixture: ComponentFixture<DetailEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: EmployeeService, useClass: EmployeeService },
        { provide: MessageService, useClass: MessageService },
      ],
      imports: [FormsModule, HttpClientModule, RouterModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DetailEmployeeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('isDisabledForm debe ser diferente al valor inicial o anterior', () => {
    let isDisabledForm: boolean = component.isDisabledForm;
    component.isDisabledForm = true;
    component.disabledForm();
    expect(isDisabledForm).not.toBeFalsy();
  });
  test('Se debe llamar la funcion createEmployee en el onSubmit si el formulario es correcto', () => {
    const form = {
      value: {
        employee_age: 1,
        employee_name: 'testing',
        employee_salary: 9999,
      },
      valid: true,
    } as NgForm;
    const spy = jest.spyOn(component, 'updateUser');
    component.onSubmit(form);
    expect(spy).toHaveBeenCalled();
  });
});
