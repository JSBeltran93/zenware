import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessagesService } from 'src/app/shared/services/message.service';

import { Employee, Employees } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../service/employee.service';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  constructor(
    private employeeService: EmployeeService,
    private dialogService: DialogService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (employees: Employees) => {
        if (employees && employees.data.length > 0) {
          this.employees = this.employeeService.getOrderAlphabetName(
            employees.data
          );
        }
      },
      error: (_err: HttpErrorResponse) => {
        console.error(_err);
        this.messageService.getMessageError('loading employee list');
      },
      complete: () => {
        this.updateEmployeList();
      },
    });
  }

  deletedEmployee(employee: Employee) {
    this.employeeService.deletedEmployee(employee.id).subscribe({
      next: (_deletedUser: string) => {
        this.messageService.getMesaggeSucess(' deleted employee');
        const posDeleted = this.getPostEmployeeToArray(employee);
        this.employees.splice(posDeleted, 1);
      },
      error: (_error: HttpErrorResponse) => {
        console.error(_error);
        this.messageService.getMessageError('deleting employee');
      },
    });
  }

  openModalCreateEmployee() {
    const ref = this.dialogService.open(CreateEmployeeComponent, {
      header: 'Create employee',
    });

    ref.onClose.subscribe({
      next: (employee: Employee) => {
        if (employee) {
          employee.profile_image = '';
          // Agregar el nuevo empleado al array y organizarlo alfabeticamente
          this.employees.push(employee);
          this.employees = this.employeeService.getOrderAlphabetName(
            this.employees
          );
        }
      },
    });
  }

  /**
   * Actualiza en la lista la informacion del empleado modificado
   */
  updateEmployeList() {
    if (this.employeeService.updatedEmploye) {
      const posUpdated = this.getPostEmployeeToArray(
        this.employeeService.updatedEmploye
      );
      this.employees[posUpdated] = this.employeeService.updatedEmploye;
    }
  }

  /**
   * Buscar la posicion del usuario dentro del usuario
   * @param user Usuario
   * @returns la posicion del usuario dentro del array
   */
  getPostEmployeeToArray(employee: Employee): number {
    return this.employees.findIndex(
      (employeeList: Employee) => employeeList.id === employee.id
    );
  }
}
