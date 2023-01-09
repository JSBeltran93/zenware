import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        { provide: HttpClient, useClass: HttpClient },
        { provide: DialogService, useClass: DialogService },
        { provide: MessageService, useClass: MessageService },
        { provide: DynamicDialogRef, useClass: DynamicDialogRef },
        { provide: ConfirmationService, useClass: ConfirmationService },
      ],
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should funcion validateFormControl required', () => {
    const formControl: any = {
      value: '',
      errors: { required: true },
      status: 'INVALID',
    };
    expect(formControl.errors['required']).toBeTruthy();
    const invalidMessage = service.validateFormControl(formControl);
    expect(invalidMessage).toEqual('Required field.');
  });
});
