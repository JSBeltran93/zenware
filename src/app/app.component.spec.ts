import { MessagesService } from './shared/services/message.service';
import { DialogService } from 'primeng/dynamicdialog';
import { EmployeeService } from 'src/app/modules/employee/service/employee.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: MessageService, useClass: MessageService },
        { provide: EmployeeService, useClass: EmployeeService },

        { provide: DialogService, useClass: DialogService },
        { provide: ConfirmationService, useClass: ConfirmationService },
        { provide: MessagesService, useClass: MessagesService },
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'zenware'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zenware');
  });
});
