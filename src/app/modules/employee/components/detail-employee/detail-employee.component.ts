import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MessagesService } from 'src/app/shared/services/message.service';

import { Employee } from '../../interfaces/employee.interface';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.scss'],
})
export class DetailEmployeeComponent implements OnInit {
  detailEmployee?: Employee;
  isDisabledForm: boolean = true;

  constructor(
    public employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessagesService,
    private _router: Router
  ) {
    this.employeeService.updatedEmploye = undefined;
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.employeeService.getEmployeeById(id)))
      .subscribe({
        next: ({ data }: any) => {
          if (data) {
            this.detailEmployee = data;
          }
        },
        error: (_err: HttpErrorResponse) => {
          console.error(_err);
          this.messageService.getMessageError('loading information');
          this.goToListEmployee();
        },
      });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.updateUser(form.value);
    }
  }

  updateUser(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe({
      next: ({ data }: any) => {
        this.employeeService.updatedEmploye = data;
        if (this.detailEmployee && this.employeeService.updatedEmploye) {
          this.employeeService.updatedEmploye.id = this.detailEmployee?.id;
          this.messageService.getMesaggeSucess('Updated employee');
          this.goToListEmployee();
        }
      },
      error: (_error: any) => {
        console.error(_error);
        this.messageService.getMessageError('Employee not updated');
      },
    });
  }

  disabledForm() {
    this.isDisabledForm = !this.isDisabledForm;
  }

  goToListEmployee() {
    this._router.navigateByUrl('/list-employee');
  }
}
