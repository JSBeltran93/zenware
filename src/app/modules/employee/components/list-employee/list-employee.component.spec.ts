import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';

import { Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../service/employee.service';
import { ListEmployeeComponent } from './list-employee.component';

describe('ListEmployeeComponent', () => {
  let component: ListEmployeeComponent;
  let fixture: ComponentFixture<ListEmployeeComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: EmployeeService, useClass: EmployeeService },
        { provide: DialogService, useClass: DialogService },
        { provide: MessageService, useClass: MessageService },
      ],
      imports: [PrimeNgModule, CommonModule, FormsModule, HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ListEmployeeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe consumir el servicio getConfAlertByConfEdiaryId en el evento onInit', () => {
    const employee: Employee = {
      id: 19,
      employee_age: 5,
      employee_name: 'testing',
      employee_salary: 9999,
      profile_image: '',
    };
    const service = TestBed.inject(EmployeeService);

    const spy = jest.spyOn(service, 'deletedEmployee');
    component.deletedEmployee(employee);
    expect(spy).toHaveBeenCalled();
  });
});
