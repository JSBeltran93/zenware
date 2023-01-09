import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PrimeNgModule } from 'src/app/shared/prime-ng/prime-ng.module';

import { MessagesService } from './../../../../shared/services/message.service';
import { CreateEmployeeComponent } from './create-employee.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEmployeeComponent],
      providers: [
        { provide: DynamicDialogRef, useValue: DynamicDialogRef },
        { provide: MessagesService, useValue: MessagesService },
      ],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        PrimeNgModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
    const spy = jest.spyOn(component, 'createEmployee');
    component.onSubmit(form);
    expect(spy).toHaveBeenCalled();
  });

  it('Llamar el metodo onCancel al hacer click en cancelar', () => {
    const onClickMock = jest.spyOn(component, 'onCancel');
    fixture.debugElement
      .query(By.css('#cancel'))
      .triggerEventHandler('click', null);
    expect(onClickMock).toHaveBeenCalled();
  });
});
