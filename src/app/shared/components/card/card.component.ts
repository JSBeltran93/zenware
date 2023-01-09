import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeIcons } from 'primeng/api';
import {
  Employee,
  Status,
} from 'src/app/modules/employee/interfaces/employee.interface';
import { EmployeeService } from 'src/app/modules/employee/service/employee.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() employee: Employee = {
    id: 0,
    employee_name: '',
    employee_salary: 0,
    employee_age: 0,
    profile_image: '',
  };
  @Output() deleteEmployee = new EventEmitter<Employee>();
  randomState: Status = Status.APPROVED;
  classByEmployee: StatusClass = {
    status: Status.APPROVED,
    class: 'sucess',
    background: 'background-succes',
  };
  constructor(
    private _router: Router,
    public employeeService: EmployeeService,
    private confirmationService: ConfirmationService
  ) {
    this.addState();
  }

  /**
   * @des generar un estado aleatorio
   * @returns estado aleatorio
   */
  addState() {
    const random = this.employeeService.randomIntFromInterval(1, 3);
    if (random === 1) {
      this.classByEmployee = {
        status: Status.APPROVED,
        class: 'sucess',
        background: 'background-succes',
      };
    }
    if (random === 2) {
      this.classByEmployee = {
        status: Status.IN_PROGRESS,
        class: 'warning',
        background: 'background-warning',
      };
    }
    if (random === 3) {
      this.classByEmployee = {
        status: Status.DECLINED,
        class: 'danger',
        background: 'background-danger',
      };
    }
  }

  confirmDeletedEmployee(employee: Employee) {
    this.confirmationService.confirm({
      message: `¿You want to delete the employee ${employee.employee_name}?`,
      header: 'Delete employee',
      icon: PrimeIcons.INFO_CIRCLE,
      accept: () => {
        if (employee) {
          this.deleteEmployee.emit(employee);
        }
      },
    });
  }

  goToDetail(id: number) {
    this._router.navigate(['/detail-employee', id]);
  }
}

interface StatusClass {
  status: Status;
  class: 'sucess' | 'warning' | 'danger';
  background: 'background-succes' | 'background-warning' | 'background-danger';
}
