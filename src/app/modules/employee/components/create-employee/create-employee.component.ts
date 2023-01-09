import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessagesService } from 'src/app/shared/services/message.service';

import { Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent {
  newEmployee = {
    employee_name: '',
    employee_salary: null,
    employee_age: null,
    profile_image: '',
  };
  constructor(
    public employeeService: EmployeeService,
    private dialogRef: DynamicDialogRef,
    private messageService: MessagesService
  ) {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.createEmployee(form.value);
    }
  }

  createEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe({
      next: ({ data }: any) => {
        this.messageService.getMesaggeSucess('Employee created');
        this.onAccept(data);
      },
      error: (_error: HttpErrorResponse) => {
        console.error(_error);
        this.messageService.getMessageError('Employee not created');
      },
    });
  }

  onAccept(employee: Employee) {
    this.dialogRef.close(employee);
  }
  onCancel() {
    this.dialogRef.close(null);
  }
}
