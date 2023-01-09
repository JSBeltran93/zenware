import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Employee, Employees } from './../interfaces/employee.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = environment.baseUrlApi;
  employees: Employee[] = [];
  updatedEmploye?: Employee;
  constructor(private _httpClient: HttpClient) {}

  //============ peticiones a la api ========================//
  getEmployees(): Observable<Employees> {
    // const url = `${this.baseUrl}/employees`;
    const url = './assets/employee.json';
    return this._httpClient
      .get<Employees>(url)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)));
  }

  /**
   * Consultar el empleado por id
   * @param id del empleado
   * @returns
   */
  getEmployeeById(id: string): Observable<Employee> {
    const url = `${this.baseUrl}/employee/${id}`;
    return this._httpClient
      .get<Employee>(url)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)));
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const url: string = `${this.baseUrl}/create`;
    return this._httpClient
      .post<Employee>(url, employee)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)));
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url: string = `${this.baseUrl}/update/${employee.id}`;
    return this._httpClient
      .put<Employee>(url, employee)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)));
  }

  deletedEmployee(employeeId: number): Observable<string> {
    const url: string = `${this.baseUrl}/delete/${employeeId}`;
    return this._httpClient
      .delete<string>(url)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err)));
  }

  // ============= Metodos complementarios =========== //
  /**
   * @param age edad del empleado
   * @returns imagen segun la edad
   */
  getImgByAge(age: number): string {
    return age && age <= 30 ? this.getPathImg(1) : this.getPathImg(2);
  }

  /**
   * @param numberPhoto numero de la foto
   * @returns url local de la imagen
   */
  getPathImg(numberPhoto: number): string {
    return `./assets/img/photo-${numberPhoto}.jpg`;
  }

  /**
   * @param min inicio de numeros aletorios
   * @param max fin de numeros aleatorios
   * @returns numero en el intervalo dado
   */
  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  /**
   * @param employees listado de empleados
   * @returns lista ordenada por el nombre de los empleados
   */
  getOrderAlphabetName(employees: Employee[]) {
    return employees.sort((a: Employee, b: Employee) =>
      a.employee_name.toLocaleLowerCase() > b.employee_name.toLocaleLowerCase()
        ? 1
        : -1
    );
  }

  /**
   * Validacion de errores generico para el formulario
   * @param formControl
   * @returns mensage de error al formulario
   */
  validateFormControl(formControl: AbstractControl): string {
    let invalidMessage: string = '';
    if (formControl.status === 'INVALID' && formControl.errors) {
      if (formControl.errors['required']) {
        invalidMessage = 'Required field.';
      }
      if (formControl.errors['minlength']) {
        invalidMessage = 'Wrong character minimum.';
      }
      if (formControl.errors['maxlength']) {
        invalidMessage = 'Incorrect maximum characters';
      }
    }
    return invalidMessage;
  }
}
